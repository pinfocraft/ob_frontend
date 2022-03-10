const ttl=5*60*1000;
console.log("jsjsjsjs");
/**
 * Fetch previously-saved tokens from indexedDB engine
 **/
var fetchTokens=function(){
	return new Promise(function(resolve,reject){
		var req=indexedDB.open('auth');

		req.onupgradeneeded=function(){
			return req.result.createObjectStore('jwt');
		};

		req.onerror=reject;

		req.onsuccess=function(){
			var osRequest=req.result.transaction(['jwt'],"readonly").objectStore('jwt').get("tokens");

			osRequest.onerror=reject;

			osRequest.onsuccess=function(){
				var tokens=osRequest.result;
				req.result.close();
				resolve(tokens);
			};
		};
	});
};

/**
 * Store tokens to indexedDB engine
 **/
var storeTokens=function(tokens){
	return new Promise(function(resolve,reject){
		var req=indexedDB.open('auth');

		req.onupgradeneeded=function(){
			return req.result.createObjectStore('jwt');
		};

		req.onerror=reject;

		req.onsuccess=function(){
			var osRequest=req.result.transaction(['jwt'],"readwrite").objectStore('jwt').put(tokens,"tokens");

			osRequest.onerror=reject;

			osRequest.onsuccess=function(){
				req.result.close();
				resolve(tokens);
			};
		};

	});
};

/**
 * Get a new JWT token using a refresh token
 **/
var refreshTokens=function(refresh_token) {
	return fetch('http://localhost:8000/unauth/token/refresh',{
		method:'POST',
		cache:'no-cache',
		headers: {
			'Content-Type':'application/json'
		},
		body:JSON.stringify({
			refresh_token:refresh_token
		})
	}).then(function(payload){
		return payload.json().then(function(payload) {
			var tokens={
				jwt:payload.token,
				refresh_token:payload.refresh_token,
				last_refresh:(new Date()).getTime()
			};
			storeTokens(tokens);
			return tokens;
		});
	});
};

/**
 * Filter outgoing fetch requests.
 *
 * If we have tokens, tack on an "Authorization" header
 **/
window.addEventListener('fetch', function(evt) {
	var url = new URL(evt.request.url);
	if(true) {
		evt.respondWith(fetchTokens().then(
			function(tokens){
				var newResult=function(tokens) {
					var headers=new Headers(evt.request.headers);
					headers.set('Authorization','Bearer '+tokens.jwt);

					return new Request(evt.request,{
						headers:headers
					});
				}
				if(!tokens) {
					return fetch(evt.request);
				}
				var rightnow=(new Date()).getTime();

				if((tokens.jwt===null)
					|| (tokens.last_refresh===null)
					|| ((rightnow - tokens.last_refresh) > ttl)
				) {
					return refreshTokens(tokens.refresh_token).then(function(tokens){
						return fetch(newResult(tokens));
					});
				}

				return fetch(newResult(tokens));
			},
			function(err){
				console.log(err);
				return fetch(evt.request);
			}
		));
	}
});

/**
 * On install, init the object store.
 **/
window.addEventListener('install',function(evt){
	console.log("ccccccccc");
	evt.waitUntil(new Promise(function(resolve,reject){
		var req=indexedDB.open('auth');

		req.onupgradeneeded=function(){
			return req.result.createObjectStore('jwt');
		};

		req.onerror=function(err){
			console.log("Can't create indexedDB",err);
			reject(err);
		};

		req.onsuccess=function(obj){
			console.log('Installed');
			resolve(obj);
		};
	}));
});

/**
 * Start up the "fetch" listener
 **/
window.addEventListener('activate',function(evt){
	console.log("111111111");
	//clients.claim();
});

/**
 * Start filtering requests right away
 **/
window.addEventListener('message',function(evt){
	console.log("222222222",evt);
	if((typeof evt.data)=='object') {
		if('jwt' in evt.data) {
			window.skipWaiting();
			storeTokens(evt.data).then(
				function(SUCCESS){
					console.log('storeTokens success',SUCCESS);
				},
				function(FAILURE){
					console.log('storeTokens failure',FAILURE);
				}
			);
		}
	}
});
import authfetch from './authfetch'

/**
 * Default fetch options
 */
const defaultOptions = {
	method: 'GET',
	cache: 'no-cache',
	headers: {
		'Content-Type': 'application/json',
		'x-access-token': localStorage.getItem("token")
	}
};


/**
 * Use like "fetch," but with named parameters, and my own defaults.
 *
 * Success result is the same as "fetch".
 * Interpreting error results is always the same logic, so do that here too.
 *
 * @param {RequestInfo} endpoint
 * @param {RequestInit} options
 * @returns {Promise}
 */
function ServerAction(props) {
	const { endpoint, options } = props;

	return new Promise((resolve, reject) => {
		try {
			console.log('defaultOptions',defaultOptions);
			authfetch(endpoint, Object.assign({}, defaultOptions, options)).then(
				(result) => {
					if (!!result && !!result.ok) {
						resolve(result.json());
					} else {
						result.json().then(
							(payload) => {
								if (!!payload.reason) {
									reject(payload.reason);
								} else {
									reject('There was an error on the server. No more information is available.');
								}
							},
							(err) => {
								reject('Got a result from the server which was not a JSON object.');
							}
						);
					}
				},
				(err) => {
					reject(err.message);
				}
			);
		} catch (err) {
			reject(err.message);
		}
	});
}

export { ServerAction }

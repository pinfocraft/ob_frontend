/**
 * Authorized requests require a JWT token.
 * This module hopes to simplify requests in the normal program flow.
 */

/**
 * Wrapper for token-authorized requests.
 * Use like "fetch."
 *
 * @param {RequestInfo} url
 * @param {RequestInit} opt
 * @returns {Promise<Response>}
 */
const apiUrl = 'http://localhost:8080';
function authfetch(url, opt) {

	return fetch(`${apiUrl}${url}`, opt).then((success) => {
		return success;
	}, (err) => {
		return err;
	});
}

export default authfetch;
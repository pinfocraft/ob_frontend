import React, { createContext, useReducer, useEffect, useState } from 'react';
import authfetch from './authfetch';

const UserDefaults = {
	firstname: '',
	lastname: '',
	username: '',
	email: '',
	avatar: null,
	roles: []
};
const UserContext = createContext(UserDefaults);

const UserContextProvider = ({ children }) => {
	const [sentinel, setSentinel] = useState(null);

	/**
	 * On mount:
	 *   Load values from server
	 */
	useEffect(() => {
		const onInitSuccess = (result) => {
			setSentinel(true);
			result.json().then(
				(payload) => {
					dispatch({ type: 'setFirstname', firstname: payload.firstname });
					dispatch({ type: 'setLastname', lastname: payload.lastname });
					dispatch({ type: 'setUsername', username: payload.username });
					dispatch({ type: 'setEmail', email: payload.email });
					dispatch({ type: 'setRoles', roles: payload.roles });
				},
				(err) => {
				}
			);
		}

		const onNetworkErr = (err) => {
			alert(err.message);
		}

		const onInitFailure = (result) => {
			if (result.status === 401) {
				setSentinel(false);
			} else {
				result.json().then(
					(payload) => {
						if (!!payload.reason) {
							alert(payload.reason);
						} else {
							alert('There was an error on the server. No more information is available.');
						}
					},
					(err) => {
						alert('Got a result from the server which was not a JSON object.');
						console.log(result);
					}
				);
			}
		}

		const onInitNetSuccess = (result) => {
			if (!!result && !!result.ok) {
				onInitSuccess(result);
			} else {
				onInitFailure(result);
			}
		}

		authfetch(`/api/users/details?id=${localStorage.getItem("idd")}`, {
			method: 'GET',
			mode: 'cors',
			cache: 'no-cache',
			headers: {
				'Content-Type': 'application/json',
				'x-access-token': localStorage.getItem("token")
			}
		}).then(
			onInitNetSuccess,
			onNetworkErr
		);
	}, []); // Empty array means only execute on mount.

	const [state, dispatch] = useReducer((state, action) => {
		switch (action.type) {
			case 'setFirstname':
				return { ...state, firstname: action.firstname };
			case 'setLastname':
				return { ...state, lastname: action.lastname };
			case 'setUsername':
				return { ...state, username: action.username };
			case 'setEmail':
				return { ...state, email: action.email };
			case 'setRoles':
				return { ...state, roles: action.roles };
			default:
				throw new Error();
		};
	}, UserDefaults);

	return (
		(sentinel === true)
			? (<UserContext.Provider value={{ UserState: state, setUser: dispatch }}>{children}</UserContext.Provider>)
			: ''
	);
}

export { UserContext, UserContextProvider }
export default UserContext
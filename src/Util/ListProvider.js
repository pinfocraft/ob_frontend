import React, { createContext, useReducer, useEffect } from 'react';
import authfetch from '../Util/authfetch';

const BlockDefaults = {
    access: [],
    workflow: [],
    app: [],
    roles: [],
    department: [],
    group: []
};
const BlockContext = createContext(BlockDefaults);

const BlockContextProvider = ({ children }) => {

    /**
     * On mount:
     *   Load values from server
     */
    useEffect(() => {
        authfetch('/api/access', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': localStorage.getItem("token")
            }
        }).then((result) => {
            if (!!result && !!result.ok) {
                result.json().then(
                    (payload) => {
                        dispatch({ type: 'setLists', access: payload });
                    },
                    (err) => {
                        console.log("err");
                    }
                );
            } else {
                console.log("err");
            }
        }).catch((err) => {
            console.log(err);
        });
        authfetch('/api/workflow', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': localStorage.getItem("token")
            }
        }).then((result) => {
            if (!!result && !!result.ok) {
                result.json().then(
                    (payload) => {
                        dispatch({ type: 'setWorkflow', workflow: payload });
                    },
                    (err) => {
                        console.log("err");
                    }
                );
            } else {
                console.log("err");
            }
        }).catch((err) => {
            console.log(err);
        });
        authfetch('/api/app', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': localStorage.getItem("token")
            }
        }).then((result) => {
            if (!!result && !!result.ok) {
                result.json().then(
                    (payload) => {
                        dispatch({ type: 'setapp', app: payload });
                    },
                    (err) => {
                        console.log("err");
                    }
                );
            } else {
                console.log("err");
            }
        }).catch((err) => {
            console.log(err);
        });
        authfetch('/api/department', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': localStorage.getItem("token")
            }
        }).then((result) => {
            if (!!result && !!result.ok) {
                result.json().then(
                    (payload) => {
                        dispatch({ type: 'setdepartment', department: payload });
                    },
                    (err) => {
                        console.log("err");
                    }
                );
            } else {
                console.log("err");
            }
        }).catch((err) => {
            console.log(err);
        });
        authfetch('/api/role', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': localStorage.getItem("token")
            }
        }).then((result) => {
            if (!!result && !!result.ok) {
                result.json().then(
                    (payload) => {
                        dispatch({ type: 'setroles', roles: payload });
                    },
                    (err) => {
                        console.log("err");
                    }
                );
            } else {
                console.log("err");
            }
        }).catch((err) => {
            console.log(err);
        });
        authfetch('/api/group', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': localStorage.getItem("token")
            }
        }).then((result) => {
            if (!!result && !!result.ok) {
                result.json().then(
                    (payload) => {
                        dispatch({ type: 'setgroup', group: payload });
                    },
                    (err) => {
                        console.log("err");
                    }
                );
            } else {
                console.log("err");
            }
        }).catch((err) => {
            console.log(err);
        });
    }, []); // Empty array means only execute on mount.

    const [state, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case 'setLists':
                return { ...state, access: action.access };
            case 'setWorkflow':
                return { ...state, workflow: action.workflow };
            case 'setapp':
                return { ...state, app: action.app };
            case 'setroles':
                return { ...state, roles: action.roles };
            case 'setdepartment':
                return { ...state, department: action.department };
            case 'setgroup':
                return { ...state, group: action.group };
            default:
                throw new Error();
        };
    }, BlockDefaults);

    return <BlockContext.Provider value={{ BlockState: state, setBlocks: dispatch }}>{children}</BlockContext.Provider>;
}

export { BlockContext, BlockContextProvider }
export default BlockContext

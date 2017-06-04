import { POST, PUT, GET, DELETE, getUser, setUser, removeUser } from 'lib/http';
import { LOGIN_USER, LOGIN_SUCCESS, LOGIN_FAILURE } from 'actions/auth';

console.log('in fetch middlware');

export const callFetchMiddleware = ( { dispatch, getState } ) => { //ES6 destructuring. Extracting store.dispatch and store,getState
    return next => action => {
        const { type } = action;

        if(!action.http){
            return next(action);
        }
        const { success, failure, body } = action.http;

        switch(type){
        case LOGIN_USER:
            console.log('in middleware', 'Body', body);
            dispatch({
                type: LOGIN_USER
            });
            setUser({body}).then(res => {
                if(res){
                    console.log(res);
                    return dispatch({
                        type: LOGIN_SUCCESS,
                        user: { 
                            username: body.username,
                            token: 'some_token'
                        },
                        message: success
                    });
                }
            },
            err => {
                return dispatch({
                    type: LOGIN_FAILURE,
                    message: failure
                });
            });
        }

    return next(action);
    };
};

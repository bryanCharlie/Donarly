import { POST, PUT, GET, DELETE, _FETCH, getUser, setUser, removeUser } from 'lib/http';
import { LOGIN_USER, LOGIN_SUCCESS, LOGIN_FAILURE } from 'actions/auth';

console.log('in fetch middlware');

export const callFetchMiddleware = ( { dispatch, getState } ) => { //ES6 destructuring. Extracting store.dispatch and store,getState
    return next => action => {
        const { type } = action;

        if(!action.http || type.length != 3){
            return next(action);
        }

        dispatch({type: type[0]});

        const { success, failure, callAPI } = action.http;

        token = getState().auth.user ? getState().auth.user.token : undefined;

        return callAPI(token).then(res => res.json())
            .then(responseJSON => {
                console.log(responseJSON)
                return dispatch({
                    type: type[1],
                    data: responseJSON,
                    message: success
                });
            })
            .catch(err => {
                return dispatch({
                    type: type[2],
                    message: failure
                });
            });

        //console.log(callAPI(token))

        // switch(type){
        // case LOGIN_USER:
        //     console.log('in middleware', 'Body', body);
        //     dispatch({
        //         type: LOGIN_USER
        //     });
        //     setUser({body}).then(res => {
        //         if(res){
        //             console.log(res);
        //             return dispatch({
        //                 type: LOGIN_SUCCESS,
        //                 user: {
        //                     username: body.username,
        //                     token: 'some_token'
        //                 },
        //                 message: success
        //             });
        //         }
        //     },
        //     err => {
        //         return dispatch({
        //             type: LOGIN_FAILURE,
        //             message: failure
        //         });
        //     });
        // }

        return next(action);
    };
};

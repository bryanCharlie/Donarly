import { POST, PUT, GET, DELETE, _FETCH, getUser, setUser, removeUser } from 'lib/http';
import { LOGIN_USER, LOGIN_SUCCESS, LOGIN_FAILURE } from 'actions/auth';

console.log('in fetch middlware');

export const callFetchMiddleware = ( { dispatch, getState } ) => { //ES6 destructuring. Extracting store.dispatch and store,getState
    return next => action => {
        const { types } = action;

        if(!action.http || types.length != 3){
            return next(action);
        }

        dispatch(types[0]);

        const { success, failure, callAPI } = action.http;

        token = getState().auth.user ? getState().auth.user.token : undefined;

        callAPI(token).then(res => res.json())
            .then(responseJSON => {
                return dispatch({
                    type: types[1],
                    data: responseJSON,
                    message: success
                });
            })
            .catch(err => {
                return dispatch({
                    type: types[2],
                    message: failure
                });
            });

        // _FETCH('https://flask-json-api.herokuapp.com/auth/login',
        //     'POST',
        //     JSON.stringify({
        //         'username': 'bcharlie@mail.com',
        //         'password': 'ttirocks123'
        //     })
        //     ).then(res => res.json())
        //         .then(responseJSON => {
        //             console.log(responseJSON);
        //         });



        // fetch('https://flask-json-api.herokuapp.com/auth/login', {
        //     method: 'POST',
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({
        //         username: 'bcharlie@mail.com',
        //         password: 'ttirocks123'
        //     })
        // }).then(res => res.json())
        // .then(responseJSON => {
        //     console.log(responseJSON);
        // });

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

import { POST, PUT, GET, DELETE, _FETCH, getUser, setUser, removeUser } from 'lib/http';
import { LOGIN_USER, LOGIN_SUCCESS, LOGIN_FAILURE } from 'actions/auth';

const btoa = require('Base64').btoa;

console.log('in fetch middlware');

export const callFetchMiddleware = ( { dispatch, getState } ) => { //ES6 destructuring. Extracting store.dispatch and store,getState
    return next => action => {
        const { type } = action;

        if(!action.http || type.length != 3){
            return next(action);
        }

        dispatch({type: type[0]});

        const { success, failure, callAPI } = action.http;

        const token = getState().auth.user ? getState().auth.user.token : undefined;
        const auth_token = btoa(`${token}:`);


        // return  fetch('http://127.0.0.1:5000/donations/donation-profile', {
        //     method: 'GET',
        //     headers: {
        //         'credentials': 'include',
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json',
        //         'Authorization': 'Basic ' + auth_token
        //     }
        // }).then(res => res.json().then(responseJSON => console.log(responseJSON)))
        return callAPI(auth_token).then(res => {
            if( res.status >= 400 ){
                return res.text().then(responseText => { 
                    console.log(responseText);
                    return dispatch({
                        type: type[2],
                        message: responseText
                    });
                });
            } else  {
                return res.json().then(responseJSON => {
                    console.log(responseJSON);
                    if(responseJSON.status === 200){
                        return dispatch({
                            type: type[1],
                            data: responseJSON.data,
                            message: success
                        });
                    } else if(responseJSON.status === 401) {
                        console.log(responseJSON);
                        return dispatch({
                            type: type[2],
                            message: responseJSON.message
                        });
                    }
                    return Promise.resolve(responseJSON);
                }, (err) => { //TODO fix this error
                    console.log('An error occured');
                });
            }
        }, err => {
            console.log(err, ' An error occured. Please try again.');
        });
        return next(action);
    };
};

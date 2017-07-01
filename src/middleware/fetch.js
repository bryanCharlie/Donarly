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



        // return  fetch('http://127.0.0.1:5000/auth/', {
        //     method: 'GET',
        //     headers: {
        //         'credentials': 'include',
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json',
        //         'Authorization': 'Basic IXlKaGJHY2lPaUpJVXpJMU5pSXNJbVY0Y0NJNk1UUTVPRFE0TlRnd05Dd2lhV0YwSWpveE5EazRNems1TkRBMGZRLmV5SnBaQ0k2TVgwLnlNTUpBS0c0QkU0dDdRTG53VzFBMUMxbkdpdHB2Vm5YSXBsSHgwOHkzWkU6'
        //     }
        // })


        callAPI(token).then(res => {
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
                    if(responseJSON.status === 200){
                        return dispatch({
                            type: type[1],
                            data: responseJSON.data,
                            message: success
                        });
                    } else if(responseJSON.status === 401) {
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
            console.log(' An error occured. Please try again.');
        });
        return next(action);
    };
};

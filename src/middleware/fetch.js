import { POST, PUT, GET, DELETE } from 'lib/http'

console.log('in fetch middlware')

export const callFetchMiddleware = ( { dispatch, getState } ) => { //ES6 destructuring. Extracting store.dispatch and store,getState
	return next => action => {
		console.log(action)

		if(!action.http){
			return next(action)
		}

		const {success, failure, body} = action.http
		const {type} = action

		if(type == 'LOGIN_USER'){
			console.log('HEYYYY')
		}

		return next(action)
	}
}

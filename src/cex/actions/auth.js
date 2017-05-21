import { removeUser } from 'lib/http'
export const LOGIN_USER = 'LOGIN_USER'
export const LOG_OUT_USER = 'LOG_OUT_USER'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'

export const logInUser(user){
	return{
		type: LOGIN_USER,
		http: {
			success: 'Welcome',
			failure: 'Invalid email or password',
			body: {
				username: user.username,
				password: user.password
			}
		}
	}
}

export const logOutUser = () => {
	removeUser()
	reutrn {
		type: LOG_OUT_USER
	}
}

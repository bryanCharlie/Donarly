import { getUser, setUser } from 'lib/http'
import { LOGIN_USER, LOGIN_SUCCESS, LOGIN_FAILURE, LOG_OUT_USER } from 'actions/auth'

const defaultState = {
	//userAuthenticated: false,
	user: getUser(),
	isFetching: false,
	error: false
}

export const auth = (
	state = { ...defaultState },
	action
) => {
	const { type, data, error_message } = action

	switch(type){
		case LOGIN_USER:
			return {
				...state, ...{
					isFetching: true,
					user: data //For now this is hardcoded
				}
			}

		case LOGIN_SUCCESS:
			setUser(data)
			return {
				...state, ...{
					isFetching: false,
				}
			}

		case LOGIN_FAILURE:
			return {
				...state, ...{
					isFetching: false,
					error: true,
					error_message
				}
			}

		case LOG_OUT_USER:
			return {
				...state, ...{
					isFetching: false,
					error: false
				}
			}

		default:
			return state
    }
}

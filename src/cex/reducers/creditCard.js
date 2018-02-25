import { getUser, setUser, removeUser } from 'lib/http';
import { SAVE_CC, SAVE_CC_SUCCESS, SAVE_CC_FAILURE } from 'actions/creditCard';
import { AsyncStorage } from 'react-native';

const defaultState = {
    //userAuthenticated: false
    saving: false,
    error: false,
    success: false,
    message: undefined
};

export const creditCard = (
    state = { ...defaultState },
    action
) => {
    const { type, data, message } = action;

    switch(type){
    case SAVE_CC:
        return {
            ...state, ...{
                defaultState,
                saving: true
            }
        };
    case SAVE_CC_SUCCESS:
        return {
            ...state, ...{
                defaultState,
                saving: false,
                success: true,
                message
            }
        };
    case SAVE_CC_FAILURE:
        return {
            ...state, ...{
                defaultState,
                error: true,
                message
            }
        };
    default:
        return state;
    }
};

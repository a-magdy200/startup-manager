import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    USER_LOGIN_SUCCESS,
    FORM_LOADING,
    FORM_ERROR,
    USER_SIGNUP_SUCCESS
} from '../actions/types';
import { User } from '../models/User';
interface State {
    email: string;
    password: string;
    error: false | string;
    loading: boolean;
    user: User | null;
    signup: boolean | null;
}
interface Action {
    type: string;
    payload: string;
}
const INITIAL_STATE: State = {
    email: 'test@test.com',
    password: 'password',
    error: false,
    loading: false,
    user: null,
    signup: null,
};
export default (state = INITIAL_STATE, action: Action) => {
    switch (action.type) {
        case FORM_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false
            };
        case FORM_LOADING:
            return {
                ...state,
                loading: action.payload,
                error: false
            };
        case USER_LOGIN_SUCCESS:
            return {
                ...state,
                ...INITIAL_STATE,
                user: action.payload,
            };
        case USER_SIGNUP_SUCCESS:
            return {
                ...state,
                signup: action.payload,
            };
        case EMAIL_CHANGED:
            return {
                ...state,
                email: action.payload
            };
        case PASSWORD_CHANGED:
            return {
                ...state,
                password: action.payload
            };
        default:
            return state;
    }
}
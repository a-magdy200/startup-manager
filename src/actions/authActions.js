import firebase from "firebase";
import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    USER_LOGIN_SUCCESS,
    FORM_LOADING,
    FORM_ERROR,
    USER_SIGNUP_SUCCESS
} from "./types";
import {Actions} from "react-native-router-flux";

export const emailChanged = email => {
    return {
        type: EMAIL_CHANGED,
        payload: email
    };
};
export const passwordChanged = password => {
    return {
        type: PASSWORD_CHANGED,
        payload: password
    };
};
const userLoggedIn = user => {
    return {
        type: USER_LOGIN_SUCCESS,
        payload: user
    };
};
const formLoading = loading => {
    return {
        type: FORM_LOADING,
        payload: loading
    };
};
const formError = error => {
    return {
        type: FORM_ERROR,
        payload: error
    };
};
const userSignUp = status => {
    return {
        type: USER_SIGNUP_SUCCESS,
        payload: status
    };
};
export const userLogin = ({ email, password }) => {
    return dispatch => {
        dispatch(formLoading(true));
        dispatch(userSignUp(false));
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => {
                dispatch(userLoggedIn(user));
                Actions.main({type: 'reset'});
            })
            .catch(error => {
                if (error.code === 'auth/wrong-password') {
                    dispatch(formError(error.message));
                } else {
                    dispatch(formLoading(true));
                    firebase.auth().createUserWithEmailAndPassword(email, password)
                        .then(user => {
                            dispatch(userLoggedIn(user));
                            dispatch(userSignUp(true));
                            Actions.main();
                        })
                        .catch(error => {
                            dispatch(formError(error.message));
                            dispatch(userSignUp(false));
                        });
                }
            });
    };
};
export default { userSignUp, emailChanged, passwordChanged };
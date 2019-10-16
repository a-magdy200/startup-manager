import {
    EMPLOYEE_CREATE,
    EMPLOYEE_UPDATE,
    EMPLOYEE_EDIT,
    EMPLOYEE_DELETE,
    REQUIRE_LOGIN,
    TOGGLE_MODAL
} from "./types";
import firebase from "firebase";
import {Actions} from "react-native-router-flux";

export const employeeUpdate = ({prop, value}) => {
    return {
        type: EMPLOYEE_UPDATE,
        payload: {prop, value}
    };
};
export const toggle_modal = () => {
    return {
        type: TOGGLE_MODAL
    };
};
const require_login = () => {
    return {
        type: REQUIRE_LOGIN
    };
};
const create_success = () => {
    return {
        type: EMPLOYEE_CREATE
    };
};
const edit_success = () => {
    return {
        type: EMPLOYEE_EDIT
    };
};
const backToMain = () => Actions.main({type: 'reset'});
const backToLogin = () => Actions.auth({type: 'reset'});
export const employeeEdit = uid => {
    return (dispatch, getState) => {
        const { employee } = getState();
        const { currentUser } = firebase.auth();
        if (currentUser) {
            firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
                .set(employee)
                .then(() => {
                    dispatch(edit_success());
                    backToMain();
                })
                .catch(console.log);
        } else {
            backToLogin();
            dispatch(require_login());
        }
    };
};
export const employeeDelete = uid => {
    return dispatch => {
        const { currentUser } = firebase.auth();
        if (currentUser) {
            firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
                .remove()
                .then(() => {
                    backToMain();
                    dispatch(toggle_modal());
                })
                .catch(console.log);
        } else {
            backToLogin();
            dispatch(require_login());
        }
    };
};
export const employeeCreate = () => {
    return (dispatch, getState) => {
        const { employee } = getState();
        const {name, phone, shift} = employee;
        const { currentUser } = firebase.auth();
        if (currentUser) {
            const {uid} = currentUser;
            firebase.database().ref(`/users/${uid}/employees`)
                .push({name, phone, shift})
                .then(() => {
                    backToMain();
                    dispatch(create_success());
                });
        } else {
            backToLogin();
            dispatch(require_login());
        }
    };
};
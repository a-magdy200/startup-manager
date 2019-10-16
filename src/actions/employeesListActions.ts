import {
    REQUIRE_LOGIN,
    EMPLOYEES_FETCH_SUCCESS
} from "./types";
import firebase from "firebase";
import {Actions} from "react-native-router-flux";
const require_login = () => {
    return {
        type: REQUIRE_LOGIN
    };
};
const get_success = (payload) => {
    return {
        type: EMPLOYEES_FETCH_SUCCESS,
        payload
    };
};
export const getEmployees = () => {
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        if (currentUser) {
            const {uid} = currentUser;
            firebase.database().ref(`/users/${uid}/employees`)
                .on('value', snapshot => {
                    dispatch(get_success(snapshot.val()));
                });
        } else {
            Actions.auth({type: 'reset'});
            dispatch(require_login());
        }
    };
};
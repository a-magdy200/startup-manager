import {
    EMPLOYEE_CREATE,
    EMPLOYEE_UPDATE,
    EMPLOYEE_EDIT,
    EMPLOYEE_DELETE,
    REQUIRE_LOGIN,
    TOGGLE_MODAL
} from '../actions/types';
import {Actions} from "react-native-router-flux";
const INITIAL_STATE = {
    name: '',
    phone: '',
    shift: 'monday',
    modalVisible: false
};
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMPLOYEE_CREATE:
            return INITIAL_STATE;
        case EMPLOYEE_EDIT:
            return INITIAL_STATE;
        case EMPLOYEE_UPDATE:
            return {...state, [action.payload.prop]: action.payload.value };
        case EMPLOYEE_DELETE:
            return INITIAL_STATE;
        case TOGGLE_MODAL:
            return {...state, modalVisible: !state.modalVisible};
        case REQUIRE_LOGIN:
            Actions.auth({type: 'reset'});
            return INITIAL_STATE;
        default:
            return {...state};
    }
}
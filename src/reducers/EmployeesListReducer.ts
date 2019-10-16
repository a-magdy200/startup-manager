import {
    REQUIRE_LOGIN,
    EMPLOYEES_FETCH_SUCCESS
} from '../actions/types';
const INITIAL_STATE = {
    employees: {}
};
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMPLOYEES_FETCH_SUCCESS:
            return { ...state, employees: action.payload };
        case REQUIRE_LOGIN:
            return {...INITIAL_STATE};
        default:
            return state;
    }
}
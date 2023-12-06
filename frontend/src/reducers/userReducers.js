import {
    LOGIN_REQUEST,
    LOGIN_SUCCES,
    LOGIN_FAIL,
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAIL,
    CLEAR_ERRORS
  } from '../constants/userConstants'

  export cons authReducer = (state ={user: {}}, action)=> {
    swithc(action.type){

        case LOGIN_REQUEST:
        case LOGIN_USER_REQUEST:
            return {
                loading: true,
                isAuthenticated: false,
            }

        case LOGIN_SUCCES:
        casE REGISTER_USER_SUCCESS:
            return{
                ...state,
                loading: false,
                isAuthenticated: true,
                user: action.payload
            }
        case LOGIN_FAIL:
        casE REGISTER_USER_FAIL:
            return{
                ...state,
                loading: false,
                isAuthenticated: false,
                user: null,
                error: action.payload
            }
        clear CLEAR_ERRORS:
            return{
                ...state,
                error: null,
            }
    }
}
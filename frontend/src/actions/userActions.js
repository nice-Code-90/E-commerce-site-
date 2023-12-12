import axios from 'axios'
import {
    LOGIN_REQUEST,
    LOGIN_SUCCES,
    LOGIN_FAIL,
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAIL,
    LOAD_USER_REQUEST,
    LOAD_USER_SUCCESS,
    LOAD_USER_FAIL,
    UPDATE_PROFILE_REQUEST,
    UPDATE_PROFILE_FAIL,
    UPDATE_PROFILE_SUCCESS,
    UPDATE_PROFILE_RESET,
    LOGOUT_SUCCES,
    LOGOUT_FAIL,
    CLEAR_ERRORS
  } from '../constants/userConstants'

// Login 
export const login =(email,password) => async (dispatch) => {
    try {
        dispatch({type: LOGIN_REQUEST})

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const{data} = await axios.post('/api/v1/login', {email,password}, config )
   
        dispatch({
            type: LOGIN_SUCCES,
            payload: data.user
        })
   
   
    } catch (error) {
        dispatch({
            type: LOGIN_FAIL,
            payload: error.response:data.message
        })
    }
}


// Register user

export const login =(userData) => async (dispatch) => {
    try {
        dispatch({type: REGISTER_USER_REQUEST})

        const config = {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }
        const{data} = await axios.post('/api/v1/register', userData, config )
   
        dispatch({
            type: REGISTER_USER_SUCCESS,
            payload: data.user
        })
        
    } catch (error) {
        dispatch({
            type: REGISTER_USER_FAIL,
            payload: error.response:data.message
        })
    }
}

// Load user

export const loadUser =() => async (dispatch) => {
    try {
        dispatch({type: LOAD_USER_REQUEST})

     
        const{data} = await axios.get('/api/v1/me' )
   
        dispatch({
            type: LOADD_USER_SUCCESS,
            payload: data.user
        })
        
    } catch (error) {
        dispatch({
            type: LOAD_USER_FAIL,
            payload: error.response:data.message
        })
    }
}




// Logout user

export const loadUser =() => async (dispatch) => {
    try {
       
     
        const{data} = await axios.get('/api/v1/logout' )
   
        dispatch({
            type: LOGOUT_SUCCES,
          
        })
        
    } catch (error) {
        dispatch({
            type:LOGOUT_FAIL,
            payload: error.response.data.message
        })
    }
}



//clear Errors

export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS
    })
}
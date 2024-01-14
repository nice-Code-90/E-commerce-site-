import axios from 'axios'
import { UPDATE_PASSWORD_FAIL } from '../constants/userConstants'

import{
    DELETE_ORDER_SUCCESS,
    DELETE_ORDER_FAIL,
    DELETE_ORDER_RESET,
    DELETE_ORDER_REQUEST
}

export const deleteOrder = (id, orderData) => async (dispatch, getState) => {
    try
    {
        dispatch({type : DELETE_ORDER_REQUEST})

        const config = {
            headers: {
                'Content-Type: ' : 'application/json'
            }
        }

        const { data } = await axios.delete('api/v1/admin/order/${id}')

        dispatch({
            type:DELETE_ORDER_SUCCESS,
            payload:data.success
        })
    }
}
import {
    DELETE_ORDER_SUCCESS,
    DELETE_ORDER_FAIL,
    DELETE_ORDER_RESET,
    DELETE_ORDER_REQUEST
} from "../constants/orderConstant"

export const orderReducer = (state = {}, action) => {
    switch (action.type) {

        case DELETE_ORDER_REQUEST:
            return{
                ...state,
                loading:true
            }

        case DELETE_ORDER_SUCCESS:
            return{
                ...state,
                loading: false,
                isDeleted: action.payload
            }

        case DELETE_ORDER_FAIL:
            return{
                ...state,
                error:action.payload
            }

        case DELETE_ORDER_RESET:
            return{
                ...state,
                isDeleted:false
            }
    }
}
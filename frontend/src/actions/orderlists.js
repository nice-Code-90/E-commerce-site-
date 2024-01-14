import React from 'react';
import { Link } from 'react-router-dom';

import MetaData  from '../layout/MetaData';
import Loader from '../layout/Loader';
import Sidebar from './Slidebar'

import { allorders, deleteOrder, clearErrors }
import { DELETE_ORDER_RESET, DELETE_ORDER_SUCCESS } from '../constants/orderConstant';
import { deleteOrder } from './orderactions';

const OrdersList = () => {
    const { isDeleted } = useSelector(state => state.order)

    useEffect(() => {
        dispatch(allOrders());

        if(error) {
            alert.error(error);
            dispatch(clearErrors())
        }

        if(isDeleted) {
            alert.success('Order deleted successfully');
            history.push('/admin/orders')
            dispatch({ type : DELETE_ORDER_RESET })
        }

    }, [dispatch, alert, error, isDeleted, history])

    const deleteOrderHandler = (id) => {
        dispatch(deleteOrder(id))
    }
}
import { FETCH_ALL, FETCH_CUSTOMER, CREATE_CUSTOMER, DELETE_ALL, DELETE_CUSTOMER, UPDATE_CUSTOMER } from '../actionTypes';
import * as api from '../api/index';

export const getCustomers = () => async (dispatch) => {
    try {
        const { data } = await api.getCustomers();

        console.log(dispatch);
        dispatch({ type: FETCH_ALL, payload: data});
    } catch(err) {
        console.log(err);
    }
};

export const getCustomer = (id) => async(dispatch) => {
    try {
        const { data } = await api.getCustomer(id);

        dispatch({ type: FETCH_CUSTOMER, payload: data });
    } catch (err) {
        console.log(err);
    }
};

export const createCustomer = (customer) => async(dispatch) => {
    try {
        const { data } = await api.saveCustomer(customer);

        dispatch({ type: CREATE_CUSTOMER, payload: data });
    } catch(err) {
        console.log(err);
    }
};

export const updateCustomer = (customer) => async(dispatch) => {
    try {
        const { data } = await api.updateCustomer(customer);
        
        dispatch({ type: UPDATE_CUSTOMER, payload: data });
    } catch(err) {
        console.log(err);
    }
};

export const deleteCustomer = (id) => async(dispatch) => {
    try {
        const { data } = await api.deleteCustomer(id);

        dispatch({type: DELETE_CUSTOMER, payload: data });
    } catch(err) {
        console.log(err);
    }
};

export const deleteAllCustomer = () => async(dispatch) => {
    try {
        const { data } = await api.deleteAllCustomer();

        dispatch({ type: DELETE_ALL, payload: data });
    } catch(err)  {
        console.log(err);
    }
};
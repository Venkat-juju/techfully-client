import {FETCH_ALL, FETCH_CUSTOMER, CREATE_CUSTOMER, UPDATE_CUSTOMER, DELETE_ALL, DELETE_CUSTOMER } from '../actionTypes';

export default (customers= [], action) => {
    switch(action.type) {
        case FETCH_ALL:
            return action.payload;
        case FETCH_CUSTOMER:
            return action.payload;
        case CREATE_CUSTOMER:
            return customers;
        case UPDATE_CUSTOMER:
            return customers;
        case DELETE_ALL:
            return [];
        case DELETE_CUSTOMER:
            return customers.filter((customer) => customer.id !== action.payload.id);
        default:
            return customers;
    }
};
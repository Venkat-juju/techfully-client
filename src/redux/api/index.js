import axios from 'axios';

const url = 'http://localhost:8080/api/customers';

export const getCustomers = () => axios.get(url);
export const getCustomer = (id) => axios.get(`${url}/${id}`);
export const saveCustomer = (customer) => axios.post(url, customer);
export const updateCustomer = (customer) => axios.put(url, customer);
export const deleteCustomer = (id) => axios.delete(`${url}/${id}`);
export const deleteAllCustomer = () => axios.delete(url);
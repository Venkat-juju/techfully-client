import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createCustomer, updateCustomer } from '../redux/actions/customer';

function CustomerForm({ customerId }) {

    const dispatch = useDispatch();
    const [customerData, setCustomerData] = useState({firstName: '', lastName: '', email: ''});
    const customer = useSelector((state) => (customerId ? state.customers.find((customer) => customer.id === customerId) : null));


    useEffect(() => {
        if (customer) {
            setCustomerData(customer);
        }
    }, [customer])

    const addCustomer = (e) => {
        e.preventDefault();
        if (!customerId) {
            dispatch(createCustomer(customerData));
        } else {
            dispatch(updateCustomer({...customerData, id: customerId}));
        }
    }

    return (
        <div>
            <h2>{customerId ? 'Update Customer' : 'Add Customer'}</h2>
            <form>
                <label htmlFor="firstName">First Name:  </label>
                <input type="text" name="firstName" value={customerData.firstName} onChange={(e) => setCustomerData({...customerData, firstName: e.target.value})}></input><br></br><br></br>
                <label htmlFor="lastName">Last Name:  </label>
                <input type="text" name="lastName" value={customerData.lastName} onChange={(e) => setCustomerData({...customerData, lastName: e.target.value})}></input><br></br><br></br>
                <label htmlFor="email">Email:  </label>
                <input type="text" name="email" value={customerData.email} onChange={(e) => setCustomerData({...customerData, email: e.target.value})}></input><br></br><br></br>
                <button type="submit" onClick={addCustomer}>Submit</button>
            </form>
        </div>
    );
}

export default CustomerForm;
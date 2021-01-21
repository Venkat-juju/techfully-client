import React from 'react';
import customer from '../redux/reducers/customer';
import { useSelector } from 'react-redux';

function ViewCustomer({ customerId }) {

    const customer = useSelector((state) => (customerId ? state.customers.find((customer) => customer.id === customerId) : {id: '', firstName: '', lastName: '', email: ''}));

    return (
        <>
        <h2>Customer Details</h2>
        <table>
            <tbody>
                <tr>
                    <td>ID: </td>
                    <td>{customer.id}</td>
                </tr>
                <tr>
                    <td>First Name: </td>
                    <td>{customer.firstName}</td>
                </tr>
                <tr>
                    <td>Last Name: </td>
                    <td>{customer.lastName}</td>
                </tr>
                <tr>
                    <td>Email: </td>
                    <td>{customer.email}</td>
                </tr>
            </tbody>
        </table>
        </>
    );
}

export default ViewCustomer;
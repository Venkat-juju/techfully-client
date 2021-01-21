import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../index.css';
import { getCustomers, deleteCustomer } from '../redux/actions/customer';
import { useSelector, useDispatch } from 'react-redux';

function Home() {

    const customers = useSelector((state) => state.customers);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCustomers());
    },[dispatch]);

    console.log(customers);
    return (
        <div style={{paddingLeft: '50px', paddingRight: '50px'}}>
            <header>
                <h1 style={{textAlign: 'center', color: 'green'}}>Customer Relationship Management</h1>
            </header>
            <div className="heading"> 
                <h3>Customer Details: </h3>
                <button className="homePageButtons"><Link className="homePageLinks" to="/add-customer">Add Customer</Link></button>
            </div>
            <div className="customerTable">
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th className="name">First Name</th>
                            <th className="name">Last Name</th>
                            <th className="email">Email</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {customers.map((customer) => (
                            <tr>
                                <td>{customer.id}</td>
                                <td>{customer.firstName}</td>
                                <td>{customer.lastName}</td>
                                <td>{customer.email}</td>
                                <td>
                                    <button style={{marginRight: '10px'}} onClick={() => {if (alert("Do you want to delete this customer? ")) return false;dispatch(deleteCustomer(customer.id))}}>Delete</button>
                                    <button style={{marginRight: '10px'}}><Link to={`/update-customer/${customer.id}`}>Update</Link></button>
                                    <button><Link to={`/show-customer/${customer.id}`}>View</Link></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Home;
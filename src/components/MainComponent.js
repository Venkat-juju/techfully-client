import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CustomerForm from './CustomerForm';
import ViewCustomer from './ViewCustomer';
import Home from './HomeComponent';

function Main() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path="/" component={() => <Home />} />
                    <Route path="/show-customer/:customerId" component={({ match }) => <ViewCustomer customerId={parseInt(match.params.customerId, 10)} />} />
                    <Route path="/add-customer" component={() => <CustomerForm />} />
                    <Route path="/update-customer/:customerId" component={({match}) => <CustomerForm customerId={parseInt(match.params.customerId,10)} />} />
                </Switch>
            </Router>
        </div>
    );
}

export default Main;
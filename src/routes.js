import React from 'react';
import {BrowserRouter, Switch,Route} from 'react-router-dom';
import Home from './pages/Home';
import ClientPage from './pages/Clients';
import ProductPage from './pages/Products';
// import ListProducts from './pages/Products/List';
// import ListClients from './pages/Clients/List';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/dashboard" component={Home} />
                <Route exact path="/cadastra-produto" component={ProductPage} />
                {/* <Route exact path="/lista-produtos" component={ListProducts} /> */}
                <Route exact path="/cadastra-cliente" component={ClientPage} />
                {/* <Route exact path="/lista-clientes" component={ListClients} />                 */}
            </Switch>
        </BrowserRouter>
    );
} 
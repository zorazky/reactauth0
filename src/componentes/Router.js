import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Inicio from './Inicio';
import Nosotros from './Nosotros';

class Router extends Component {
    render() {
        return (
            <BrowserRouter>
            
                <Switch>
                    <Route exact path="/nosotros" component={Nosotros} /> 
                    <Route exact path="/" component={Inicio} />
                    <Router component={Error} />
                    
                </Switch>

            </BrowserRouter>
        )
    }
}

export default Router;
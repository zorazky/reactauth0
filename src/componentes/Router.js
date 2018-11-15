import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Productos from './Productos';
import Nosotros from './Nosotros';
import Error from './Error';
import infoProductos from '../datos/datos.json';

class Router extends Component {

    state = {
        productos: []
    }
    componentWillMount() {
        this.setState({
            productos: infoProductos
        })
    }

    render() {
        return (
            <BrowserRouter>
                <div className="contenedor">
                    <Header />
                    <Switch>
                        <Route exact path="/" render={() => (

                            <Productos 
                                productos={this.state.productos}
                            />

                        )} />
                        <Route exact path="/nosotros" component={Nosotros} /> 
                        
                        <Router component={Error} />
                        
                    </Switch>
                
                </div>
                

            </BrowserRouter>
        )
    }
}

export default Router;
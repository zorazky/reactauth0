import React, {Component} from 'react';
import Producto from './Producto';
import Buscador from './Buscador';
import '../css/Productos.css';

import axios from 'axios';

class Productos extends Component {

    state = {
        productos: [],
        terminoBusqueda: ''
    }

    componentWillMount() {
        this.queryAPI();
    }

    queryAPI = () => {
        const { getAccessToken } = this.props.auth;

        const headers = { 'Authorization': `Bearer ${getAccessToken() }`};

        const url = 'http://localhost:5000/productos';

        return axios.get(url, {headers})
            .then( respuesta => this.setState({productos: respuesta.data}));
    }

    login = () => {
        this.props.auth.login();
    }


    render() {
        const { isAuthenticated } = this.props.auth;
        return (
            <div className="productos">
               

                {   isAuthenticated() && (
                    <React.Fragment>
                        <h2>Nuestros Productos</h2>
                        <Buscador 
                            busqueda={this.props.busquedaProducto}
                        />
                        <ul className="lista-productos">
                            {Object.keys(this.state.productos).map(producto => (
                                <Producto 
                                    informacion = {this.state.productos[producto]}
                                    key={producto}
                                />
                            ))}
                        </ul>

                    </React.Fragment>
                )

                }
                
                 
                
                {  !isAuthenticated() && (
                    <div className="contenedor-boton">
                        <p>Para ver el contenido debes de estar logueado</p>
                        <a className="boton" onClick={ this.login }>Iniciar Sesión</a>
                    </div>
                 )}
            </div>
        )
    }
}

export default Productos;
import React, {Component} from 'react';
import Producto from './Producto';
import Buscador from './Buscador';
import '../css/Productos.css';

class Productos extends Component {

    state = {
        productos: [],
        terminoBusqueda: ''
    }

    componentWillMount() {
        this.queryAPI();
    }

    queryAPI = () => {
        console.log(this.props.auth.isAuthenticated());
    }

    login = () => {
        this.props.auth.login();
    }


    render() {
        const { isAuthenticated } = this.props.auth;
        return (
            <div className="productos">
                <h2>Nuestros Productos</h2>
                <Buscador 
                    busqueda={this.props.busquedaProducto}
                />

                {   isAuthenticated() && (
                    <p>Estas logeado</p>
                )

                }
                <ul className="lista-productos">
                 
                </ul>
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
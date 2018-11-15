import React from 'react';
import '../css/SingleProductos.css';
//import '../css/Productos.css';

const SingleProducto = (props) => {
   
    const { imagen, nombre, precio, descripcion} = props.producto;
    
    return (
        <div className="info-producto">
            <div className="imagen">
                <img src={`/img/${imagen}.png`} alt={nombre} />
            </div>
            <div className="info">
                <h2>{nombre}</h2>
                <p className="precio">$ {precio}</p>
                <p>{descripcion}</p>
            </div>
        </div>
        
    )
}

export default SingleProducto;
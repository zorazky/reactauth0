import React, { Component } from 'react';
import '../css/Nosotros.css';

class Nosotros extends Component {
    render() {
        return (
            <div className="contenedor-nosotros">
                <div className="imagen">
                    <img src="/img/camisa_1.png" alt="imagen nosotros"/>
                </div>
                <div className="contenido">
                    <h2>Sobre Nosotros</h2>
                    <p>Maecenas elementum sapien a nisi dignissim molestie. Ut fringilla, metus a molestie porta, dui risus fringilla turpis, quis aliquam ligula massa sed arcu. Aenean non sapien condimentum, porta velit a, molestie massa. Integer aliquet rhoncus est, cursus tempus lorem maximus sit amet. Nam facilisis auctor massa. Sed vehicula nisl et ultrices rhoncus. Nulla sollicitudin urna eu nulla varius, ultricies molestie dolor tempor. Sed ut ante sapien. Maecenas nec vestibulum est. Fusce rutrum nec risus eget tincidunt. Quisque a dolor in quam tincidunt tempor. Praesent consectetur dictum elit, a tempus odio congue sed. Sed volutpat convallis risus, ut ullamcorper eros ullamcorper in. Vestibulum condimentum erat ut eros lacinia gravida non ac metus. Donec mollis eros mauris, et vulputate mi auctor ac. Morbi placerat urna a nunc iaculis, vel fringilla nulla vehicula.</p>
                </div>
            </div>
        )
    }
}

export default Nosotros;
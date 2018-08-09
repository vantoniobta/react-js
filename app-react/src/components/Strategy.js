import React, { Component } from 'react';
import '../App.css';

class Strategy extends Component {
	render(){
		return (
			<div className="container">
               <div className="row">
                <div className="col-md-6" >
                 <h3>Estrategia Digital</h3>
                   <p className="parrafo_strategy">Vivimos en un mundo de constantes cambios, por lo cual América Digital es la mejor opción para lograr mayor impacto
                    y exposición de marca en las campañas publicitarias de los anunciantes. <br/><br/>
                    Conectamos con nuestra audiencia a través de diferentes plataformas.
					Nuestros altos índices de engagement y afinidad con nuestro público en cada uno de nuestros productos 
					nos coloca en el primer lugar de preferencia de anunciantes y agencias de medio, 
					dentro del rubro. Todo esto, gracias a la permanente generación de contenidos de calidad, con inmediatez y exclusividad.</p>
                </div>
                 <div className="col-md-6" >
                 <img src="http://mediakit.americatv.com.pe/wp-content/uploads/2014/12/presentacion-media-kit-productos.png" className="img-rounded" height="100%" width="100%" alt="Cinque Terre"/>
                </div>
               </div>
            </div>
			)
	}
}
export default Strategy;
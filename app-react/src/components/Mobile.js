import React, { Component } from 'react';
import { app } from  '../data.json'; 
import '../components.css';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

class Mobile extends Component {

 constructor(){
    super();
    this.state = {
      app
    }
  }

   render(){
       const app = this.state.app.map((query_m, i) =>{
		  return (
		       <div className="col-md-2">
		         <br/><br/>
		            <h3>{query_m.number}</h3>
		            <p>{query_m.title}</p>
		            <hr/>
		        </div>
		   )
	})

		return (
			<div className="container">
                 <div className="row">
                
                   <div className="col-md-4">
                    <Zoom>
                      <img src="http://playersoflife.com/mediakit/img/ALCANCE/CELULAR.png" className="img-fluid" alt="app_img" />
                       </Zoom>
                    </div>
                  
                        <Fade right>
			               { app}
			             </Fade>

	              </div>
	            </div>
			)
	}
}
export default Mobile;
import React, { Component } from 'react';
import { app } from  '../data.json'; 
import '../components.css';
import Fade from 'react-reveal/Fade';

class Mobile extends Component {

 constructor(){
    super();
    this.state = {
      app
    }
  }

   render(){
       const app = this.state.app.map((query, i) =>{
		  return (
		      <div className="col-md-3">
		                 <h5>{query.title}</h5>
		                  <p>{query.number}</p>
		        </div>
		   )
	})

		return (
			<div className="container">
                 <div className="row">
                 <Fade left>
                   <div className="col-md-6" >
                      <img src="http://playersoflife.com/mediakit/img/ALCANCE/CELULAR.png" className="img-fluid" alt="app_img" />
                    </div>
                     </Fade>
                      <Fade right>
			            <div className="col-sm-6" id="get_info">
			              <div className="row mt-8">{ app}</div>
			             </div>
			            </Fade>
	              </div>
	            </div>
			)
	}
}
export default Mobile;
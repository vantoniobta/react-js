import React, { Component } from 'react';
import { app } from  '../data.json'; 


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
		          <div className="card">
		              <div className="card-body">
		                 <h5>{query.title}</h5>
		                  <p>{query.number}</p>
		                </div>
		            </div>
		        </div>
		   )
	})

		return (
			<div className="container">
                 <div className="row">
                   <div className="col-md-6">
                      <img src="http://playersoflife.com/mediakit/img/ALCANCE/CELULAR.png" className="img-fluid" alt="app_img" />
                    </div>
			           <div className="col-sm-6">
			           <h3>App Multimedios</h3>
			              <div className="row mt-8">{ app}</div>
			            </div>
	              </div>
	            </div>
			)
	}
}
export default Mobile;
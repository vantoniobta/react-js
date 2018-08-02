import React, { Component } from 'react';
import { browser } from  '../data.json'; 


class Desktop extends Component {

 constructor(){
    super();
    this.state = {
      browser
    }
  }

   render(){
       const browser = this.state.browser.map((query, i) =>{
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
                      <img src="https://www.servicetrade.com/wp-content/uploads/2017/12/quicksight-macbook.png" className="img-fluid" alt="browser_img" />
                    </div>
			           <div className="col-sm-6">
			           <h3>App Multimedios</h3>
			              <div className="row mt-8">{ browser }</div>
			            </div>
	              </div>
	            </div>
			)
	}
}
export default Desktop;
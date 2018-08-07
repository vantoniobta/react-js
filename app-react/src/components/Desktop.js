import React, { Component } from 'react';
import { browser } from  '../data.json'; 
import './components.css';
import Fade from 'react-reveal/Fade';


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
		                 <h5>{query.title}</h5>
		                  <p>{query.number}</p>
		        </div>
		   )
	})

		return (
			<div className="container">
                 <div className="row">
                   <div className="col-md-6" id="get_info">
                   <Fade left>
			            <div className="row mt-8">{ browser }</div>
			        </Fade>
                    </div>
                    <Fade right>
			           <div className="col-sm-6">
			            <img src="https://www.servicetrade.com/wp-content/uploads/2017/12/quicksight-macbook.png" className="img-fluid" alt="browser_img" />
			            </div>
			          </Fade>
	              </div>
	            </div>
			)
	}
}
export default Desktop;
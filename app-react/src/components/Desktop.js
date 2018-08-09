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
		  	<div className="col-lg-3 col-sm-4">
		          <p>{query.title}</p>
		          <h2>{query.number}</h2>
		    </div>
		   )
	  })
	
	return (
			<div className="container" id="desktop_container">
			     <div className="row">
			      <Fade left>
			           { browser }
			        </Fade>
			      </div>
	          </div>
			)
	}
}
export default Desktop;
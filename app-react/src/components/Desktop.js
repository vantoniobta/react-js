import React, { Component } from 'react';
import { browser } from  '../data.json'; 
import './components.css';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';


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
                <div className="col-md-2" id="test_123">
                <br/><br/>
		            <h3>{query.number}</h3>
		            <p>{query.title}</p>
		            <hr/>
		        </div>
		   )
	})

		return (
			<div className="container" >
			     <div className="row">
                   <Fade left>
			           { browser }
			        </Fade>

			        <div className="col-md-4">
			           <Zoom>
			          <img src="https://www.servicetrade.com/wp-content/uploads/2017/12/quicksight-macbook.png" className="img-fluid" alt="browser_img" />
			          </Zoom>
			        </div>


			      </div>
	          </div>
			)
	}
}
export default Desktop;
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';



import './css/App.css';
import './css/nav.css';
import './css/circular.css';

import Home from './Home';
import Advertising from './Advertising';



class App extends Component {
  render() {
    return (
      <div className="App">
	     <nav>
		    <div className="menu-icon">
              <i className="fa fa-bars fa-2x"></i>
		    </div>
 	         <div className="logo">
		          <img src="http://agencia.multimedios.tv/img/toolbar_logo.png" width="60%" alt="logo_img"/>
		     </div>
		      <div className="menu">
		         <ul>
		            <li><NavLink exact to="/">Home</NavLink></li>
		            <li><NavLink to="advertising">Advertising</NavLink></li>
		         </ul>
		       </div>
	       </nav>

	        <header>
		      <div className="example">
			       <p>Multimedios</p>
				        <ul className="list-name">
						   <li className="home-title">Monterrey</li>
						   <li className="home-title">Cd.Mexico</li>
		                   <li className="home-title">Costa Rica</li>
						   <li className="home-title">Laguna</li>
						</ul>
			    </div>
			</header>

          <Switch>
            <Route exact path="/" component={Home} />
            <Route  path="/Advertising" component={Advertising} />
          </Switch>

      </div>
    );
  }
}
export default App;

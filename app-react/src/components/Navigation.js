import React, { Component } from 'react';




class Navigation extends Component {
	render(){
		return (
		    <nav>
           <div className="menu-icon">
             <i className="fa fa-bars fa-2x"></i>
            </div>
            <div className="logo">
                <img src="http://agencia.multimedios.tv/img/toolbar_logo.png" width="60%" alt="logo_img"/>
            </div>
              <div className="menu">
                 <ul>
                    <li><a href="/advertising">Advertising</a></li>
                    <li><a href="/tarifario">Tarifario</a></li>
                    <li><a href="/socialmedia">Social Media</a></li>
                  </ul>
              </div>
          </nav>

          
			)
	}
}
export default Navigation;
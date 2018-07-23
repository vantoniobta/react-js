import React, { Component } from 'react';

class Navigation extends Component {
	render(){
		return (
		     <nav className="navbar navbar-dark bg-dark">
	           <a heref="#" className="text-white">
	           { this.props.title}
	           </a>
	         </nav>
			)
	}
}
export default Navigation;
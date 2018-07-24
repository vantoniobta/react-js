import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Navigation from './components/Navigation';
import Header from './components/Header';
import { query } from  './data.json'; 


class App extends Component {

  constructor(){
    super();
    this.state = {
      query

    }
  }


  render() {
    const query = this.state.query.map((sql, i) =>{
      return (
        <div className="col-md-3">
               <h5>{sql.title}</h5>
               <p>{sql.nU}</p>
          </div>
        )
   })


    return (
      <div className="App">
        <Navigation title="MMDigital"/>
         <Header/>

          <div className="container">
            <div className="row mt-4">
              { query}
            </div>
          </div>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    );
  }
}
export default App;

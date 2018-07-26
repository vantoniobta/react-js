import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Navigation from './components/Navigation';
import Header from './components/Header';
import { browser,app } from  './data.json'; 


class App extends Component {

  constructor(){
    super();
    this.state = {
      browser,
      app

    }
  }


  render() {

    const browser = this.state.browser.map((sql, i) =>{
      return (
        <div className="col-md-3">
               <h5>{sql.title}</h5>
               <p>{sql.number}</p>
          </div>
        )
   })

     const app = this.state.app.map((sql, i) =>{
      return (
        <div className="col-md-3">
               <h5>{sql.title}</h5>
               <p>{sql.number}</p>
          </div>
        )
   })


    return (
      <div className="App">
        <Navigation title="MMDigital"/>
         <Header/>

          <div className="container">
            <div className="row mt-4">
              { browser}
            </div>
            <div className="row mt-4">
              { app }
            </div>
          </div>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    );
  }
}
export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import Slide from 'react-reveal/Slide';

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
        <Zoom left>
          <div className="col-md-3">
            <div className="card">
               <div className="card-body">
                 <h5>{sql.title}</h5>
                   <p>{sql.number}</p>
                 </div>
               </div>
            </div>
          </Zoom>
        )
   })

     const app = this.state.app.map((sql, i) =>{
      return (
        <Slide left>
            <div className="col-md-3">
              <div className="card">
                 <div className="card-body">
                   <h5>{sql.title}</h5>
                   <p>{sql.number}</p>
                  </div>
                </div>
              </div>
          </Slide>
        )
   })


    return (
      <div className="App">
        <Navigation title="MMDigital"/>
         <Header/>

          <div className="container">
             <Fade left>
               <h1>Example <span className="badge badge-secondary">Browser</span></h1>
             </Fade>
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

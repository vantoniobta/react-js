import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Navigation from './components/Navigation';
import { tasks } from  './tasks.json';


class App extends Component {

  constructor(){
    super();
    this.state = {
      tasks
    }
  }


  render() {
    const tasks = this.state.tasks.map((taks, i) =>{
      return (
        <div className="cold-md-4">
            <div className="card mt-4">
              <div className="card-header">
               <h3>{taks.title}</h3>
              </div>
              <div className="card-body">
              <p>{taks.usuarios}</p>
              </div>
            </div>
          </div>
        )
   })

    return (
      <div className="App">
        <Navigation title="MMDigital"/>
          <div className="container">
            <div className="row mt-4">
              { tasks}
            </div>
          </div>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    );
  }
}
export default App;

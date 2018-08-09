import React, { Component } from 'react';

import './App.css';
import './nav.css';

import Navigation from './components/Navigation';
import Header     from './components/Header';
import Strategy   from './components/Strategy';


class App extends Component {
  render() {
    return (
      <div className="App">
         <Navigation/>
         <Header/>
         <Strategy/>
      </div>
    );
  }
}
export default App;

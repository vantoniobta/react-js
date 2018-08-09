import React, { Component } from 'react';
import './App.css';
import './nav.css';
import Navigation from './components/Navigation';
import Header from './components/Header';
import Mobile from './components/Mobile';
import Desktop from './components/Desktop';
import Richmedia from './components/Richmedia';
import Strategy from './components/Strategy';




class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation title="MMDigital"/>
         <Header/>
          <Strategy/>
             <div className="container">
                <div className="row">
                 <h3>AUDIENCIAS Y MÉTRICAS</h3>
                  <br/>
                 </div>
               </div>

                 <Desktop/>
                 <Mobile/>
                 <Richmedia/>
              
      </div>
    );
  }
}
export default App;

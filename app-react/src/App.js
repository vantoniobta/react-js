import React, { Component } from 'react';
import './App.css';
import './nav.css';
import Navigation from './components/Navigation';
import Header from './components/Header';
import Mobile from './components/Mobile';
import Desktop from './components/Desktop';
import Richmedia from './components/Richmedia';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation title="MMDigital"/>
         <Header/>

             <div className="container">
                <div className="row">
                 <h3>Somos una agencia especializada en Marketing Digital, utilizando las mejores herramientas.</h3>
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

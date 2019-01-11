import React, { Component } from 'react';
import './App.css';
import {HashRouter} from "react-router-dom";
import PortFolio from './containers/PortFolio'

class App extends Component {
  render() {
    return (
      <div className="App">
          <HashRouter><PortFolio/></HashRouter>
      </div>
    );
  }
}

export default App;

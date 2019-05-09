import React, {Component} from 'react';
//import './App.css';

//import fs from 'fs';
import SalesView from './components/SalesView';



class App extends Component {
  render() {
    return(
      <div>
        <h3>Snapwire Interview App</h3>
        <SalesView />
      </div>
    );
  }
}

export default App;

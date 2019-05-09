import React, {Component} from 'react';

import SalesView from './components/SalesView';

class App extends Component {
  render() {
    return(
      <div>
        <div className="header">
          <h2>Snapwire</h2>
        </div>
        <SalesView />
      </div>
    );
  }
}

export default App;

import { Component } from 'react';
import { Statics } from './components/Statics.js';
import './App.css';

class App extends Component {

  render() {

    // const { total } = this.state;

    return (
      <div className="App">
        <Statics />
        {/* <h2>Total: {total}</h2> */}
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import router from './router.js';
class App extends Component {
  constructor() {
    super();

    this.state = {

    }
  }

  render() {
    return (
      <div className='App'>
        {router}
      </div>
    )
  }
}
export default App;
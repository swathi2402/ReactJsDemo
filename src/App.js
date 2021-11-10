import React from 'react';
import './App.css';
import logo from './assets/BL_logo_square_jpg.jpg'

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      title: 'Hello from BridgeLabz'
    }
  }

  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <img src={logo} alt="The BrigdeLabz logo" />
      </div>
    );
  }
}

export default App;

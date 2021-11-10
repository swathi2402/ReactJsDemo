import React from 'react';
import './App.css';
import logo from './assets/BL_logo_square_jpg.jpg'

class App extends React.Component {

  url = "https://www.bridgelabz.com/"

  constructor() {
    super()
    this.state = {
      userName: '',
      nameError: ''
    }
  }

  onClick = ($event) => {
    console.log("Save button is clicked: ", $event);
    window.open(this.url, "_blank");
  }

  onNameChange = (event) => {
    console.log("Value is ", event.target.value);
    const nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$')
    if (nameRegex.test(event.target.value)) {
      this.setState({ userName: event.target.value })
      this.setState({ nameError: '' })
    } else {
      this.setState({ nameError: 'Name is incorrect' })
    }
  }

  render() {
    return (
      <>
        <div>
          <h1>Hello {this.state.userName} from BrigdeLabz</h1>
          <img src={logo} onClick={this.onClick} alt="The BrigdeLabz logo" />
        </div>
        <div>
          <input onChange={this.onNameChange} />
          <span className="error-output">{this.state.nameError}</span>
        </div>
      </>
    );
  }
}

export default App;

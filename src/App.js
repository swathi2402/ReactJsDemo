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
      this.setState({ nameError: 'Name is incorrect!' })
    }
  }

  render() {
    return (
      <>
      <div className="ht-ml">
      <div className="body-css">
        <div>
          <h1 className="header1">Hello {this.state.userName}, from BrigdeLabz</h1>
          <img className="image" src={logo} onClick={this.onClick} alt="The BrigdeLabz logo" />
        </div>
        <div>
          <input className="in-put" onChange={this.onNameChange} placeholder="Enter Name" />
          <span className="error-output">{this.state.nameError}</span>
        </div>
        <p className="para">At BridgeLabz, we're a techie community</p>
        <ul>
          <li className="list">technologists</li>
          <li className="list">thinkers</li>
          <li className="list">builders</li>
        </ul>
        <p className="para">
          BridgeLabz Solutions has introduced an Income Sharing Agreement (ISA) model which provides an opportunity for the students to pursue
          training under the BridgeLabz CodinClub and pay when they score a job. The revolutionary model prevents financial constraints from
          hampering the skill development of learners, structuring the fee payment after gaining employment.
        </p>
        <p className="para">
          To know about us, visit <a href="https://www.bridgelabz.com/">BridgeLabz</a>
          to learn even more about our mission i.e., <strong>Employability to all</strong>.
        </p>
        </div>
        </div>
      </>
    );
  }
}

export default App;

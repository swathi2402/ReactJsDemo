import React from 'react';
import About from './about';
import Home from './home';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <div class="division"><h1>Hello from BridgeLabz!</h1></div>
          <ul>
            <li>
              <Link class="listlink" to="/home">Home</Link>
            </li>
            <li>
              <Link class="listlink" to="/about">About</Link>
            </li>
          </ul>
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;

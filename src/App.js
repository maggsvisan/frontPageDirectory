import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="topnav" id="myTopnav">
          <span>
              <img src={require("./logo.png")} alt="" className=" logoNavBar" />
          </span>
          <div className="onlyOptions">
            <a href="#home" className="active">Home</a>
            <div className="dropdown">
              <button className="dropbtn">Services 
                <i className="fa fa-caret-down"></i>
              </button>
              <div className="dropdown-content">
                <a href="http://192.168.65.19:3006/scheduler">Digital Signage Management</a>
                <a href="#">Troubleshooting </a>
                <a href="#"> Another Solution</a>
              </div>
            </div> 
            <a href="#news">About</a>
            <a href="#contact">Contact</a>
          </div>
        </div>

        <div>
            
            <img src={require("./marktlabs.png")} alt="" className=" banner" />
        </div>        
      </div>
    );
  }
}

export default App;

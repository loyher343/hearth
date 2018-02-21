/*jshint esversion: 6 */
import React, { Component } from 'react';
import '../App.css';
import router from '../router.js';
//import {withRouter} from 'react-router-dom'
import axios from 'axios';
import  config  from '../config.js'



class App extends Component {
  constructor(props){
    super(props);

    this.state={
      cardbackList: [],
      info:{}
    }
  }

  

  render() {
    return (
      <div className="App">
        <div>
          <p>hearth nav</p>
          
        </div>
        {router}
      </div>
    );
  }
}

export default App;

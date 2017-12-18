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

  componentWillMount(){
    
    axios.get('https://omgvamp-hearthstone-v1.p.mashape.com/cardbacks?'+config.key).then(res => {
      //console.log(res.data)
      this.setState({cardbackList: res.data})
      //console.log(this.state)
    })
    axios.get('https://omgvamp-hearthstone-v1.p.mashape.com/info'+config.key).then(res => {
      console.log(res)
    })
    
  }

  renderCardbacks(item, index) {
    //console.log(item, index)
    return(
      <div key="index">

      </div>
    )
  }

  render() {
    return (
      <div className="App">
       <p>hearth</p>
       <div>
       { this.state.cardbackList.map((x,i) => this.renderCardbacks(x,i)) }
       </div>

      </div>
    );
  }
}

export default App;

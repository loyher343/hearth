import React, { Component } from 'react';
import axios from 'axios';
import  config  from '../../config.js';

class CardBacks extends Component{
    constructor(props){
        super(props);
    
        this.state={
          cardbackList: [],
          info:{}
        }
      }

    componentWillMount(){
    
        axios.get('https://omgvamp-hearthstone-v1.p.mashape.com/cardbacks?'+config.key).then(res => {
          console.log(res.data)
          this.setState({cardbackList: res.data})
          console.log(this.state)
        })
        axios.get('https://omgvamp-hearthstone-v1.p.mashape.com/info'+config.key).then(res => {
          console.log(res)
        })
        
    }
    renderCardbacks(item, index) {
        console.log(item, index)
        return(
          <div key={index}>
    
            <h3>{item.name}</h3>
            <div>
            <img src={item.img} />
            </div>
            <p>{item.description}</p>
            <p>{item.howToGet}</p>
            <p>{item.source}</p>
          </div>
          
        )
      }
    
    render(){
        return(
            <div>
                <h1>Cardbacks</h1>
                <div>
                  { this.state.cardbackList.map((x,i) => this.renderCardbacks(x,i)) }
                </div>
            </div>
        )
    }
    // return(
    //     <div>
    //     <p>JOASTsdfa</p>
    //     </div>
    // )
}
export default CardBacks
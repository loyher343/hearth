import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import config from '../../config.js';
import './GameTest.css'

class GameTest extends Component{ 

    constructor(props){
        super(props);

        this.state={
            value: '',
            card: []
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillMount(){
        axios.get('https://omgvamp-hearthstone-v1.p.mashape.com/cards/search/' +'tinyfin' + "?" + config.key).then(res=>{
            // console.log(res.data)
             this.setState({card:res.data})
            // console.log(this.state)
         })
    }
    
    handleChange(event) {
        this.setState({value: event.target.value});
        //console.log(this.state)
    }

    handleSubmit(event){
        //console.log('Joast',this.state.value)
        event.preventDefault();
        axios.get('https://omgvamp-hearthstone-v1.p.mashape.com/cards/search/' + this.state.value+ "?" + config.key).then(res=>{
           // console.log(res.data)
            this.setState({card:res.data})
           // console.log(this.state)
        })
        
        console.log("yo")
    }

    renderCard(item, index){
        console.log(item,index)
        return(
            <div className="cardContainer" key={index}>
            {/* <h3>{ item.name }</h3> */}
            <div className="cardBox">
                <img src={ item.img } />
            </div>
            <p>{item.description}</p>
           
            </div>
        )
    }
    
    render(){
        
        return(
            <div>
                <Link to="/">Home</Link>
                <div>tis better to be vile than vile esteem</div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <input type="text" placeholder="Card Name" value={this.state.value} onChange={this.handleChange}  /> <br />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                <div>
                    { this.state.card.map((x,i) => this.renderCard(x,i)) }
                </div>
            </div>
        )
    }
}
export default GameTest;

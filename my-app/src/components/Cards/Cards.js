import React, { Component } from 'react';
import axios from 'axios';
import config from  '../../config.js';

class Cards extends Component{
    constructor(props){
        super(props);

        this.state={
            value: '',
            card: {}
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSumbit = this.handleSumbit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
        console.log(this.state)
    }

    handleSumbit(event){
        console.log('Joast')
       
       axios.get('https://omgvamp-hearthstone-v1.p.mashape.com/cards/search/' + this.state.value+ "?" + config.key).then(res=>{
            console.log(res.data)
            this.setState({card:res.data})
        })
 
        console.log(this.state)
        
        console.log("yo")
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSumbit}>
                <label>
                <input type="text" placeholder="Card Name" value={this.state.value} onChange={this.handleChange}  /> <br />
                </label>
                <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}
export default Cards;
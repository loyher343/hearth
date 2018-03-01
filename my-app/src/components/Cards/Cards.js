import React, { Component } from 'react';
import axios from 'axios';
import config from  '../../config.js';

class Cards extends Component{
    constructor(props){
        super(props);

        this.state={
            value: '',
            card: []
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSumbit = this.handleSumbit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
        console.log(this.state)
    }

    handleSumbit(event){
        console.log('Joast',this.state.value)
        event.preventDefault();
// axios.get('https://omgvamp-hearthstone-v1.p.mashape.com/cardbacks?'+config.key).then(res => {
//           console.log(res.data)
//           this.setState({cardbackList: res.data})
//           console.log(this.state)
//         })

        //axios.get('https://omgvamp-hearthstone-v1.p.mashape.com/cards/search/Deathwing?mashape-key=yXPCCXWwlYmshY8PzPP8zFklfw5kp1lqWB9jsnB77ezPdfpGRh').then(res=>{
        axios.get('https://omgvamp-hearthstone-v1.p.mashape.com/cards/search/' + this.state.value+ "?" + config.key).then(res=>{
            console.log(res.data)
            this.setState({card:res.data})
            console.log(this.state)
        })
 
        
        console.log("yo")
    }

    renderCard(item, index){
        console.log(item,index)
        return(
            <div key={index}>
            <h3>{ item.name }</h3>
            <div>
                <img src={ item.img } />
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
                <form onSubmit={this.handleSumbit}>
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
export default Cards;
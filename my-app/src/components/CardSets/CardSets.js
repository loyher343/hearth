import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';
import  config  from '../../config.js';

class CardSets extends Component{
    constructor(props){
        super(props);

        this.state={   
            set: [] 
        

        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        let cards=[];
        //console.log(event.target.value)
        event.preventDefault();
        //this.setState({value: event.target.value});
        //axios.get('https://omgvamp-hearthstone-v1.p.mashape.com/cards/sets/Classic?mashape-key=yXPCCXWwlYmshY8PzPP8zFklfw5kp1lqWB9jsnB77ezPdfpGRh'
        axios.get('https://omgvamp-hearthstone-v1.p.mashape.com/cards/sets/'+ event.target.value+"?"+ config.key)
        .then(res => {
            //console.log(res.data)
            res.data.map((x,i) => {
                //console.log(x.cost)
               x.cost||x.cost===0? cards.push(x): null
            })
            this.setState({set:cards})
        }).catch(function(error) {
            console.log(error);
        });
        //console.log(cards)
        //console.log(this.state)
    }

   renderSets(item, index){
       
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
            <Link to="/">Home</Link>
                <div>
                    <button value="Classic" onClick={this.handleChange} >Classic</button>
                    <button value="Hall of Fame" onClick={this.handleChange} >Hall of Fame</button>
                    <button value="Naxxramas" onClick={this.handleChange} >Naxxramas</button>
                    <button value="Goblins vs Gnomes" onClick={this.handleChange} >Goblins vs Gnomes</button>
                    <button value="Blackrock Mountain" onClick={this.handleChange} >Blackrock Mountain</button>
                    <button value="The Grand Tournament" onClick={this.handleChange} >The Grand Tournament</button>
                    <button value="The League of Explorers" onClick={this.handleChange} >The League of Explorers</button>
                    <button value="Whispers of the Old Gods" onClick={this.handleChange} >Whispers of the Old Gods</button>
                    <button value="One Night in Karazhan" onClick={this.handleChange} >One Night in Karazhan</button>
                    <button value="Mean Streets of Gadgetzan" onClick={this.handleChange} >Mean Streets of Gadgetzan</button>
                    <button value="Journey to Un'Goro" onClick={this.handleChange} >Journey to Un'Goro</button>
                    <button value="Knights of the Frozen Throne" onClick={this.handleChange} >Knights of the Frozen Throne</button>
                    <button value="Kobolds & Catacombs" onClick={this.handleChange} >Kobolds & Catacombs</button>
                    <button value="The Witchwood" onClick={this.handleChang} >The Witchwood </button>
                </div>
                {console.log(this.state)}
                <div>
                    {this.state.set.map((x,i) =>  this.renderSets(x,i)) }
                </div>
            </div>
        )
    }
}// set:    [ "Basic",
        //         "Classic",
        //         "Promo",
        //         "Hall of Fame",
        //         "Naxxramas",
        //         "Goblins vs Gnomes",
        //         "Blackrock Mountain",
        //         "The Grand Tournament",
        //         "The League of Explorers",
        //         "Whispers of the Old Gods",
        //         "One Night in Karazhan",
        //         "Mean Streets of Gadgetzan",
        //         "Journey to Un'Goro",
        //         "Knights of the Frozen Throne",
        //         "Kobolds & Catacombs",
        //         "Tavern Brawl",
        //         "Hero Skins",
        //         "Missions",
        //         "Credits",
        //         "System",
        //         "Debug" ]
export default CardSets;
import React, { Component } from 'react';
import axios from 'axios';
import  config  from '../../config.js';

class CardSets extends Component{
    constructor(props){
        super(props);

        this.state={   
            set: [] 
        // set:    [ "Basic",
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

        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        console.log(event.target.value)
        event.preventDefault();
        //this.setState({value: event.target.value});
        //axios.get('https://omgvamp-hearthstone-v1.p.mashape.com/cards/sets/Classic?mashape-key=yXPCCXWwlYmshY8PzPP8zFklfw5kp1lqWB9jsnB77ezPdfpGRh'
        axios.get('https://omgvamp-hearthstone-v1.p.mashape.com/cards/sets/'+ event.target.value+"?"+ config.key)
        .then(res => {
            console.log(res.data)
            this.setState({set:res.data})
        }).catch(function(error) {
            console.log(error);
        });
        console.log(this.state)
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
                <div>
                    <button value="Classic" onClick={this.handleChange} >Classic</button>
                    <button value="Hall of Fame" onClick={this.handleChange} >Hall of Fame</button>
                    <button value="Naxxramas" onClick={this.handleChange} >Naxxramas</button>
                    <button value="Goblins vs Gnomes" onClick={this.handleChange} >Goblins vs Gnomes</button>
                    <button value="Blackrock Mountain" onClick={this.handleChange} >Blackrock Mountain</button>
                    <button value="The Grand Tournament" onClick={this.handleChange} >The Grand Tournament</button>
                </div>
                {console.log(this.state)}
                <div>
                    {this.state.set.map((x,i) =>  this.renderSets(x,i)) }
                </div>
            </div>
        )
    }
}
export default CardSets;
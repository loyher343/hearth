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
        event.preventDefault();
        //this.setState({value: event.target.value});
        axios.get('https://omgvamp-hearthstone-v1.p.mashape.com/cards/set/'+ event.target.value+"?"+ config.key)
        .then(res => {
            console.log(res.data)
        })
    }

    componentWillMount(){
        axios.get('https://omgvamp-hearthstone-v1.p.mashape.com/cards/set/'+this.state.set+"?"+ config.key)
        .then(res => {
            console.log(res.data)
        })
    }

    render(){
        return(
            <div>
                <div>
                    <button value="Kobolds & Catacombs" onClick={this.handleChange} >Kobolds & Catacombs</button>
                </div>
                {console.log(this.state)}
            </div>
        )
    }
}
export default CardSets;
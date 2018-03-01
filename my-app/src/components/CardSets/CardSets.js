import React, { Component } from 'react';
import axios from 'axios';
import  config  from '../../config.js';

class CardSets extends Component{
    constructor(props){
        super(props);

        this.state={

        }
    }

    componentWillMount(){
        axios.get('https://omgvamp-hearthstone-v1.p.mashape.com/cards/set/'+"?"+ config.key)
        .then(res => {
            console.log(res.data)
        })
    }
    // "Basic",
    // "Classic",
    // "Promo",
    // "Hall of Fame",
    // "Naxxramas",
    // "Goblins vs Gnomes",
    // "Blackrock Mountain",
    // "The Grand Tournament",
    // "The League of Explorers",
    // "Whispers of the Old Gods",
    // "One Night in Karazhan",
    // "Mean Streets of Gadgetzan",
    // "Journey to Un'Goro",
    // "Knights of the Frozen Throne",
    // "Kobolds & Catacombs",
    // "Tavern Brawl",
    // "Hero Skins",
    // "Missions",
    // "Credits",
    // "System",
    // "Debug"
    render(){
        return(
            <div>
                <div>
                    <button>Kobolds & Catacombs</button>
                </div>
            </div>
        )
    }
}
export default CardSets;
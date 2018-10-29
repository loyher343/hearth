import React from 'react';
import { Link } from 'react-router-dom'

export default function home(){
    return(
        <div>
        <Link to="/CardSets">CardSets</Link>
        <Link to="/CardBacks">CardBacks</Link>
        <Link to="/Cards">CardSearch</Link>
        <Link to="/GameTest">GameTest</Link>
        <p>JOAST</p>
        </div>
    )
}

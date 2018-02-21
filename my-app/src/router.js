import React from 'react';
import { Route, Switch } from 'react-router-dom';
import home from './components/home/home';
import CardBack from './components/CardBacks/CardBacks';


export default (
    <Switch>
     <Route exact path='/' component={home}/>
     <Route path='/CardBacks' component={CardBack}/>
    </Switch>
)
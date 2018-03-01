import React from 'react';
import { Route, Switch } from 'react-router-dom';
import home from './components/home/home';
import CardBack from './components/CardBacks/CardBacks';
import Cards from './components/Cards/Cards';
import CardSets from './components/CardSets/CardSets'


export default (
    <Switch>
     <Route exact path='/' component={home}/>
     <Route path='/CardBacks' component={CardBack}/>
     <Route path='/Cards' component={Cards}/>
     <Route path='/CardSets' component={CardSets}/>
    </Switch>
)
import React from 'react';
import {Switch, Route} from 'react-router-dom';
import HomePage from './components/principal/HomePage';
import HomePageLavaTrastes from './components/principalLavarTrastesApp/HomePageLavarTrastesApp';

const Routes = () => (

        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path='/lavatrastesazar' component={HomePageLavaTrastes} />
        </Switch>

);

export default Routes;
import React from 'react';
import {Switch, Route} from 'react-router-dom';
import HomePage from './components/principal/HomePage';
import HomePageLavaTrastes from './components/principalLavarTrastesApp/HomePageLavarTrastesApp';
import DiabetesPage from './components/diabetesapp/principal/DiabetesPage';

const Routes = () => (

        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path='/lavatrastesazar' component={HomePageLavaTrastes} />
	        <Route path='/diabetes' component={DiabetesPage} />
        </Switch>

);

export default Routes;
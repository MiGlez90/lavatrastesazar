import React from 'react';
import {Switch, Route} from 'react-router-dom';
import HomePage from './principal/HomePage';
import Resultado from './resultado/PaginaResultado';

const Routes = () => (

        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/resultado" component={Resultado}/>
        </Switch>

);

export default Routes;
import React from 'react';
import {Switch, Route} from 'react-router-dom';
import HomePage from './components/principal/HomePage';
import HomePageLavaTrastes from './components/principalLavarTrastesApp/HomePageLavarTrastesApp';
import DiabetesPage from './components/diabetesapp/principal/DiabetesPage';
import LoginPage from "./components/login/LoginPage";
import SignupPage from "./components/signup/SignupPage";
import AgregarMedida from "./components/diabetesapp/principal/AgregarMedida";

const Routes = () => (

        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path='/lavatrastesazar' component={HomePageLavaTrastes} />
	        <Route path='/diabetes' component={DiabetesPage} />
	        <Route path='/login' component={LoginPage}/>
	        <Route path='/signup' component={SignupPage}/>
	        <Route path='/agregarMedida' component={AgregarMedida}/>
        </Switch>

);

export default Routes;
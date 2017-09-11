import React, { Component } from 'react';
import Routes from './Routes';
import NavBarResponsive from './components/navbar/NavBarResponsive';
import './App.css';


class App extends Component {

	render() {
        return (
	        <div className="App">
		        <NavBarResponsive/>
		        <Routes/>
	        </div>
        );
    }
}

export default App;

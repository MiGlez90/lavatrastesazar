import React, {Component } from 'react';
import {Grid,Row,Col} from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import './HomePage.css';

class HomePage extends Component{
	render(){
		const image = require('../../assets/img/wallpaper-earth-hd-24.jpg');
		const homePage = {
			backgroundImage: `url(${image})`,
			backgroundSize: 'cover'
		};
		return(

			<Grid className="homePage">
				<Row>
					<Col xs={12} sm={12} md={12}>
						<h1>Hola</h1>
					</Col>
				</Row>
			</Grid>
		);
	}
}

export default HomePage;
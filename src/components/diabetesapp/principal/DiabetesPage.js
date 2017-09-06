import React, {Component} from 'react';
import {Row, Grid, Col } from 'react-bootstrap';
//import firebase from '../../../firebase';
import './DiabetesPage.css';


class diabetesPage extends  Component
{
	constructor(props){
		super(props);
		this.state = {
			user: ''
		};

		// firebase.auth().onAuthStateChanged( (user) => {
		// 	if (user) {
		// 		console.log(user.uid);
		// 		var usuario = user.uid;
		// 		this.setState({user:usuario});
		// 		this.recuperarGastos();
		// 	} else {
		// 		// No user is signed in.
		// 		//toastr.error('No ha iniciado sesión');
		// 		//alert('No ha iniciado sesión');
		// 		//this.props.history.push("/");
		// 	}
		// });


	}
	render()
	{
		return (
			<div className="diabetes-page">
				<Grid>
					<Row>
						<Col xs={12} sm={12} md={12} lg={12} >
							<h1>I work</h1>
						</Col>
					</Row>
				</Grid>
			</div>

		);
	}
}

export default diabetesPage;

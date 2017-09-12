import React, {Component} from 'react';
import {Row, Grid, Col, Button } from 'react-bootstrap';
import firebase from '../../../firebase';
import toastr from 'toastr';
import './DiabetesPage.css';
import Grafica from "./Grafica";
import Tabla from "./Tabla";
import {NavLink} from 'react-router-dom';




class diabetesPage extends  Component
{
	constructor(props){
		super(props);
		this.state = {
			user: ''
		};

		firebase.auth().onAuthStateChanged( (user) => {
			if (user) {
				console.log(user.uid);
				var usuario = user.uid;
				this.setState({user:usuario});
			} else {
				// No user is signed in.
				toastr.error('No ha iniciado sesión');
				//alert('No ha iniciado sesión');
				this.props.history.push("/login");
			}
		});


	}
	render()
	{
		return (
			<div style={{marginTop:'10vh'}} className="diabetes-page">
				<Grid>
					<Row>
						<Col xs={12} sm={12} md={12} lg={12} >
							<h1>Control Diabetes</h1>
							<h2>Grafica de mis últimas muestras</h2>
							<Grafica/>
							<h2>Detalles de las muestras</h2>
							<Tabla
								data={[

										{medida:298,descripcion:'Mucha carne',fecha:'12-08-1990'},
										{medida:90,descripcion:'Mucha arroz',fecha:'12-08-1991'},
										{medida:100,descripcion:'Mucha prote',fecha:'12-08-1992'},
										{medida:212,descripcion:'Mucha papata',fecha:'12-08-1993'},
										{medida:215,descripcion:'sipi',fecha:'12-08-1993'},

									]}
							/>
							<NavLink to='/agregarMedida'>
								<Button bsStyle="primary">Agregar Medida</Button>
							</NavLink>

						</Col>
					</Row>
				</Grid>
			</div>

		);
	}
}

export default diabetesPage;

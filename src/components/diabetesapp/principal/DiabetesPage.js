import React, {Component} from 'react';
import {Row, Grid, Col, Button } from 'react-bootstrap';
import firebase from '../../../firebase';
import toastr from 'toastr';
import './DiabetesPage.css';
import Grafica from "./Grafica";
import Tabla from "./Tabla";
import AgregarMedida from "./AgregarMedida";
//import {Prompt} from 'react-router-dom';




class diabetesPage extends  Component
{
	constructor(props){
		super(props);
		const fechaActual = new Date();
		const ffecha = fechaActual.getMonth() + 'de' +fechaActual.getFullYear();
		console.log('ffecha'+ffecha);
		this.state = {
			userId: '',
			showAddNew: false,
			isBlocking:false,
			medida:{
				medida: 0,
				descripcion: '',
				fecha: ''
			},
			dateRama: ffecha,
			medidasLista: [],

		};

		firebase.auth().onAuthStateChanged( (user) => {
			if (user) {
				console.log(user.uid);
				var usuario = user.uid;
				this.setState({userId:usuario});
			} else {
				// No user is signed in.
				toastr.error('No ha iniciado sesión');
				//alert('No ha iniciado sesión');
				this.props.history.push("/login");
			}
		});
	}






	// actualizarMedidaState = (value) => {
	// 	let medida = this.state.medida;
	// 	medida[e.target.name] = value;
	// 	this.setState({medida,isBlocking:true});
	// }

	handleChange = (e) => {

		let medida = this.state.medida;
		medida[e.target.name] = e.target.value;
		this.setState({medida,isBlocking:true});

	}

	guardarMedida = (medida) => {

		const rama = firebase.database().ref('usuarios/' + this.state.userId + '/medidas/' + this.state.dateRama);

		rama.push(medida)
			.then(r=>{
				toastr.success("Se guardó tu gasto con éxito");
				this.toogleShowAdd();
			}).catch(e=>{
			toastr.error('Falló, repite', e);
		});

	}

	handleSubmit = (e) => {
		e.preventDefault();
		this.setState({isBlocking:false});

		//this.guardarIngreso(this.state.gasto);
		for(let i in this.state.medida){
			console.log(this.state.medida[i]);
		}

		this.guardarMedida(this.state.medida);
	}


	toogleShowAdd = () => {
		let showAddNew = this.state.showAddNew;
		showAddNew = !showAddNew;
		this.setState({showAddNew});
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

							<Button
								bsStyle="primary"
								onClick={this.toogleShowAdd}>
								Agregar Medida
							</Button>

						</Col>
					</Row>

					{this.state.showAddNew &&
					<AgregarMedida
						modalOptions={{
							show: this.state.showAddNew,
							onHide: this.toogleShowAdd
						}}
						onClick={this.toogleShowAdd}
						onChange={this.handleChange}
						onSubmit={this.handleSubmit}
						isBlocking={this.state.isBlocking}
					/>
					}
				</Grid>
			</div>

		);
	}
}

export default diabetesPage;

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




	}

	componentWillMount(){
		firebase.auth().onAuthStateChanged( (user) => {
			if (user) {
				console.log(user.uid);
				var usuario = user.uid;
				this.setState({userId:usuario});
				this.recuperarMedidas();

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

	recuperarMedidas = () => {
		//let path =  '/medidas/'+ this.state.userId + this.state.dateRama;
		firebase.database().ref( '/medidas/'+ this.state.userId + this.state.dateRama)
			.on('child_added',
				(s) => {
					const medidasLista = this.state.medidasLista;
					let item = s.val();
					const key = s.key;
					item['key'] = key;
					medidasLista.push(item);
					this.setState({medidasLista});
			});
			// .catch(
			// (error) => {
			// 	console.log(error);
			// });

	}

	guardarMedida = (medida) => {

		const rama = firebase.database().ref( '/medidas/'+ this.state.userId + this.state.dateRama);

		rama.push(medida)
			.then((r) =>{
				console.log('Nuevo dato:' + r);
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
					<Row >
						<Col xs={12} sm={12} md={6} lg={6} >
							<h1>Control Diabetes</h1>
							<h2>Grafica de mis últimas muestras</h2>
							<Grafica

							/>
						</Col>
						<Col xs={12} sm={12} md={6} lg={6}>
							<h2>Detalles de las muestras</h2>
							<Tabla
								data={this.state.medidasLista}
							/>

							<Button
								bsStyle="primary"
								onClick={this.toogleShowAdd}>
								Agregar Medida
							</Button>

						</Col>
					</Row>
					<Row>

					</Row>
					<Row>
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
					</Row>


				</Grid>

			</div>

		);
	}
}

export default diabetesPage;

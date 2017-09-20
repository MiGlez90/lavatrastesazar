import React, {Component} from 'react';
import {Row, Grid, Col, Button } from 'react-bootstrap';
import firebase from '../../../firebase';
import toastr from 'toastr';
import './DiabetesPage.css';
import Grafica from "./Grafica";
import Tabla from "./Tabla";
import AgregarMedida from "./AgregarMedida";
import swal from 'sweetalert2'
import * as moment from 'moment';
import 'moment/locale/es';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
//import SweetAlert from 'sweetalert-react';
//import {Prompt} from 'react-router-dom';

const style = {
    margin: 0,
    top: 'auto',
    right: 'auto',
    bottom: 20,
    left: 20,
    position: 'fixed',
};



class diabetesPage extends  Component
{
	constructor(props){
		super(props);
		const fechaActual = moment().format('YYYY-MM-DD');
		this.state = {
			userId: '',
			showAddNew: false,
			isBlocking:false,
			medida:{
				medida: 0,
				descripcion: '',
				fecha: fechaActual
			},
			dateRama: fechaActual,
			medidasLista: []
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
		//let path =  '/medidas/'+ this.state.userId + '/  + this.state.dateRama;
		firebase.database().ref( '/medidas/'+ this.state.userId + '/' +  moment().format('YYYY') + '/' + moment().format('MM'))
			.on('child_added',
				(s) => {
					moment.locale('es');
			        const medidasLista = this.state.medidasLista;
                    //console.log(s.val());
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

		const rama = firebase.database().ref( '/medidas/'+ this.state.userId + '/' +  moment().format('YYYY') + '/' + moment().format('MM'));

		rama.push(medida)
			.then((r) =>{
				//console.log('Nuevo dato:' + r);
				toastr.success("Se guardó tu gasto con éxito");
				this.toogleShowAdd();
			}).catch(e=>{
			toastr.error('Falló, repite', e);
		});

	}

	handleSubmit = (e) => {
		e.preventDefault();
		this.setState({isBlocking:false});

        //cambia la locación para que las fechas sean en español
        moment.locale('es');

		//cambia el formato de la fecha antes de mandar los datos
        //al servidor

        let medida = this.state.medida;
        console.log('Fecha ' + medida.fecha);
        medida['fecha'] = moment(medida.fecha,'YYYY MM DD').format('DD MMMM YYYY');
        this.setState({medida});

        //Imprime los datos que se van a mandar
        // for(let i in this.state.medida){
        //     console.log(this.state.medida[i]);
        // }

        // guarda la medida

		this.guardarMedida(this.state.medida);

	}


	toogleShowAdd = () => {
        if ( this.state.isBlocking ) {
            swal({
                title: 'Seguro que quieres salir?',
                text: "Perderas tus datos!!",
                type: 'warning',
                showCancelButton: true,
                //confirmButtonColor: '#3085d6',
                //cancelButtonColor: '#d33',
                confirmButtonText: 'Salir'
            }).then( () => {
                    let showAddNew = this.state.showAddNew;
                    showAddNew = !showAddNew;
                    this.setState({showAddNew});

            })
        }else{
            let showAddNew = this.state.showAddNew;
            showAddNew = !showAddNew;
            this.setState({showAddNew});
        }


	}

	openShowAdd = ( ) => {
        let medida = this.state.medida;
        console.log('Fecha al input: ' +  this.state.dateRama);
        medida['fecha'] = this.state.dateRama;
	    this.setState({showAddNew: true ,isBlocking: false, medida});
    }



	render() {
		return (
			<div style={{marginTop:'10vh'}} className="diabetes-page">
				<Grid>
					<Row >
						<Col xs={12} sm={12} md={6} lg={6} >
							<h1>Control Diabetes</h1>
							<h2>Grafica de mis últimas muestras</h2>
                            <Grafica
								medidasLista={this.state.medidasLista}/>
						</Col>
						<Col xs={12} sm={12} md={6} lg={6}>
							<h2>Detalles de las muestras</h2>
							<div style={{marginBottom:20}}>
                                <Tabla
                                    data={this.state.medidasLista}/>
                            </div>


                            <div className="fab">
                                <FloatingActionButton  style={style} onClick={this.openShowAdd}>
                                    <ContentAdd />
                                </FloatingActionButton>
                            </div>

                            <div className="buttonNormal">
                                <Button
                                    bsStyle="primary"
                                    onClick={this.openShowAdd}>
                                    Agregar Medida
                                </Button>
                            </div>



						</Col>
					</Row>
					<Row>
                        {/*Blank on purpouse*/}
					</Row>
					<Row>
						{
							this.state.showAddNew &&
						    <AgregarMedida
                                modalOptions={{
                                    show: this.state.showAddNew,
                                    onHide: this.toogleShowAdd
                                }}
                                onClick={this.toogleShowAdd}
							    onChange={this.handleChange}
							    onSubmit={this.handleSubmit}
                                isBlocking={this.state.isBlocking}
                                fechaActual={this.state.medida.fecha}
                            />

						}
					</Row>
				</Grid>

			</div>

		);
	}
}

export default diabetesPage;

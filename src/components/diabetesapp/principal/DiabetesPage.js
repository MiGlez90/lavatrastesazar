import React, {Component} from 'react';
import {Row, Grid, Col, Button } from 'react-bootstrap';
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
import * as usuariosActions from '../../../actions/usuarioActions';
import * as medidasActions from '../../../actions/medidasActions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import ShowAverage from "./ShowAverage";
import SelectMonth from "./SelectMonth";
import {Paper} from 'material-ui';

const style = {
    margin: 0,
    bottom: 20,
    right: 20,
    position: 'fixed',
};



class DiabetesPage extends  Component
{
	constructor(props){
		super(props);
		const fechaActual = moment().format('YYYY-MM-DD');
		const month = moment().format('MM');
		const year = moment().format('YYYY');
		this.state = {
			showAddNew: false,
			isBlocking:false,
			dateRama: fechaActual,
			monthPicker:{
				year: year,
				month: month,
			}
		};
	}


	handleSubmit = (e, medida) => {
		debugger;
		e.preventDefault();
		this.setState({isBlocking:false});

        //cambia la locación para que las fechas sean en español
        moment.locale('es');

        this.props.medidasActions.saveMedida(medida,this.props.usuario.uid).then(()=>{
            debugger;
            toastr.success('Guardado');
            this.toogleShowAdd();
        });

	};

    guardarMedida = (medida) => {
    	this.props.medidasActions.saveMedida(medida,this.props.usuario.uid,medida.year).then(()=>{
        	debugger;
        	toastr.success('Guardado');
        	this.toogleShowAdd();
		});

    };


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


	};

	openShowAdd = ( ) => {
	    this.setState({showAddNew: true ,isBlocking: false});
    };

    handleChange = (e) => {
    	let valor = e.target.value;
    	let monthPicker = this.state;
    	let valores = valor.split('-');
    	monthPicker.year = valores[0];
    	monthPicker.month = valores[1];

    	this.setState({monthPicker}, ()=>{
    		this.loadMedidas();
		});
	};

    loadMedidas = () => {
    	this.props.medidasActions.loadListaMedidas(
    		this.props.usuario.uid,
			this.state.monthPicker.year,
			this.state.monthPicker.month
		);
	};

	render() {
		return (
			<div className="diabetes-page">
				<Grid>
					<Row >
						<Col xs={12} sm={12} md={6} lg={6} >
                            <SelectMonth
                                onChange={this.handleChange}
                                year={this.state.monthPicker.year}
                                month={this.state.monthPicker.month}
                            />
							<ShowAverage medidas={this.props.medidas}/>
						</Col>
						<Col xs={12} sm={12} md={6} lg={6}>
                            <Grafica
                                medidasLista={this.props.medidas}/>
                            {/*<h2>Detalles de las muestras</h2>*/}
                            {/*<div style={{marginBottom:20}}>*/}
                                {/*<Tabla*/}
                                    {/*data={this.props.medidas}/>*/}
                            {/*</div>*/}



                            <FloatingActionButton  style={style} onClick={this.openShowAdd}>
                                <ContentAdd />
                            </FloatingActionButton>







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
							    onSubmit={this.guardarMedida}
                                isBlocking={this.state.isBlocking}
								values={this.state.medida}
                            />

						}
					</Row>
				</Grid>

			</div>

		);
	}
}

function mapStateToProps(state,ownProps) {
	return {
		usuario: state.usuario,
		medidas: state.medidas,
        medidasFetched: state.medidas !== undefined && state.medidas !== null
	}
}

function mapDispatchToProps(dispatch) {
	return {
		usuariosActions: bindActionCreators(usuariosActions,dispatch),
		medidasActions: bindActionCreators(medidasActions,dispatch)
	}
}

DiabetesPage = connect(mapStateToProps,mapDispatchToProps) (DiabetesPage);
export default DiabetesPage;

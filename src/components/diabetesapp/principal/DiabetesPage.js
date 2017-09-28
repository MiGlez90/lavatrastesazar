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
import InputBootstrap from "../../common/InputBootstrap";
import ShowAverage from "./ShowAverage";

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
			showAddNew: false,
			isBlocking:false,
			dateRama: fechaActual
		};
	}






	handleSubmit = (e, medida) => {
		debugger;
		e.preventDefault();
		this.setState({isBlocking:false});

        //cambia la locación para que las fechas sean en español
        moment.locale('es');

		//cambia el formato de la fecha antes de mandar los datos
        //al servidor

        // let medida = this.state.medida;
        // console.log('Fecha ' + medida.fecha);
        // medida['fecha'] = moment(medida.fecha,'YYYY MM DD').format('DD MMMM YYYY');
        // this.setState({medida});



		//this.guardarMedida(m);

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

    componentWillUpdate(nextProps,nextState){
        //alert('Recibi props alerta');
        if( typeof nextProps.usuario === 'undefined' ||
            nextProps.usuario === null){
            toastr.error('Debe iniciar sesión');
            this.props.history.push('/login');
        }
    }

	render() {
		return (
			<div style={{marginTop:'10%'}} className="diabetes-page">
				<Grid>
					<Row >
						<Col xs={12} sm={12} md={6} lg={6} >
							<h1 style={{fontSize:'210%'}}>Control Diabetes</h1>
							<h2 style={{fontSize:'110%'}}>Grafica de mis últimas muestras</h2>
							<div>
								<InputBootstrap
									label="Selecciona el mes"
									input={{
                                        required: "required",
                                        name: "mes",
                                        type: "month",
                                        style: {paddingRight: 0,margin:'0px 0px 10px 0px'}
                                    }}
								/>
							</div>
							<ShowAverage medidas={this.props.medidas}/>
							<div style={{marginLeft:20,textAlign:'left'}}>
								<Button>Aceptar</Button>
							</div>
                            <Grafica
								medidasLista={this.props.medidas}/>
						</Col>
						<Col xs={12} sm={12} md={6} lg={6}>
							<h2>Detalles de las muestras</h2>
							<div style={{marginBottom:20}}>
                                <Tabla
                                    data={this.props.medidas}/>
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
		medidas: state.medidas
	}
}

function mapDispatchToProps(dispatch) {
	return {
		usuariosActions: bindActionCreators(usuariosActions,dispatch),
		medidasActions: bindActionCreators(medidasActions,dispatch)
	}
}

export default connect(mapStateToProps,mapDispatchToProps) (diabetesPage);

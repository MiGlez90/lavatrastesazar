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
import * as fechaFiltroActions from '../../../actions/fechaFiltroActions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import ShowAverage from "./ShowAverage";
import SelectMonth from "./SelectMonth";
import {Dialog, FlatButton, Paper} from 'material-ui';

const style = {
    margin: 0,
    bottom: 20,
    right: 20,
    position: 'fixed',
};

export function toMiliseconds(fechaISO) {
    return moment(fechaISO , moment.ISO_8601).format('x');
}

export function toBetterFormat(fechaISO) {
    return moment(fechaISO , moment.ISO_8601).format('DD MMMM YYYY');
}


class DiabetesPage extends  Component
{
	constructor(props){
		super(props);
		const fechaActual = moment().format('YYYY-MM-DD');
		const hoy = new Date();
		const month = moment().format('MM');
		const year = moment().format('YYYY');
		this.state = {
			showAddNew: false,
			isBlocking:false,
			dateRama: fechaActual,
			monthPicker:{
				year: year,
				month: month,
			},
            today: hoy,
            medida: {
                medida: 0,
                descripcion: '',
                fecha: hoy
            }
		};
	}

	////////////////////////////////////////////////////////////////////

    handleMedidaChange = (e) => {
        let targetName = e.target.name;
        let medida = this.state.medida;
        medida[targetName] = e.target.value;
        this.setState({medida,isBlocking:true});

    };

    onChangeFecha = (e, date) => {
    	debugger;
    	let {medida} = this.state;
    	medida.fecha = date;
    	this.setState({medida});
	};

	handleSubmit = (e) => {
		e.preventDefault();
		this.setState({isBlocking:false});

        //cambia la locación para que las fechas sean en español
        moment.locale('es');
        let {medida} = this.state;
        let toSend = Object.assign({},medida);
        toSend.fecha = medida.fecha.getTime();

        this.props.medidasActions.saveMedida(toSend,this.props.usuario.uid).then(()=>{
            debugger;
            toastr.success('Guardado');
            this.toogleShowAdd();
        });

	};


    ////////////////////////////////////////////////////


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

    handleChangeDateInicio = (event, date) => {
        this.props.fechaFiltroActions.changeFechaInicio(date);
    };

    handleChangeDateFinal = (event, date) => {
        this.props.fechaFiltroActions.changeFechaFinal(date);
    };

    retrieveIngresosWithDate = () => {
        const {fechaFiltro} = this.props;
        const fechaFinal = toMiliseconds(fechaFiltro.final);
        const fechaInicio = toMiliseconds(fechaFiltro.inicio);
        if(this.checkIfFinalIsGreather(fechaInicio,fechaFinal)){
            // this.props.actions.loadIngresosDelimitedByRange(fechaInicio, fechaFinal)
            //     .then( r => {
            //         // this.props.fechaFiltroActions.changeFechaFinal(fechaFiltro.final);
            //         // this.props.fechaFiltroActions.changeFechaInicio(fechaFiltro.inicio);
            //         // this.onToogle();
            //     });
        }else{
            alert('La fecha final debe ser mayor a la de inicio');
        }
    };

	render() {
	    const {fechaFiltro} = this.props;
	    const actionsAddMedida = [
			<FlatButton
				label="Cancelar"
				primary={true}
				onClick={this.toogleShowAdd}
			/>,
			<FlatButton
				label="Guardar"
				primary={true}
				keyboardFocused={true}
				onClick={this.handleSubmit}
			/>
		];
		return (
			<div className="diabetes-page">
				<Grid>
					<Row >
						<Col xs={12} sm={12} md={6} lg={6} >
                            <SelectMonth
                                filtro={ fechaFiltro }
                                onChangeInicio={this.handleChangeDateInicio}
                                onChangeFinal={this.handleChangeDateFinal}
                                onSubmit={this.retrieveIngresosWithDate}
                                onClick={this.onToogle}
                            />
							<ShowAverage medidas={this.props.medidas}/>
						</Col>
						<Col xs={12} sm={12} md={6} lg={6}>
                            <Grafica
                                medidasLista={this.props.medidas}/>
                            <FloatingActionButton  style={style} onClick={this.openShowAdd}>
                                <ContentAdd />
                            </FloatingActionButton>
						</Col>
					</Row>
					<Row>
                        {/*Blank on purpouse*/}
					</Row>
					<Row>
						<Dialog
							open={this.state.showAddNew}
							modal={false}
							onRequestClose={this.toogleShowAdd}
							actions={actionsAddMedida}
						>
							<AgregarMedida
                                medida={this.state.medida}
								onChange={this.handleMedidaChange}
								onChangeFecha={this.onChangeFecha}
								onSubmit={this.handleSubmit}
								today={this.state.today}
							/>
						</Dialog>
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
        fechaFiltro: state.fechaFiltro,
        medidasFetched: state.medidas !== undefined && state.medidas !== null
	}
}

function mapDispatchToProps(dispatch) {
	return {
		usuariosActions: bindActionCreators(usuariosActions,dispatch),
		medidasActions: bindActionCreators(medidasActions,dispatch),
        fechaFiltroActions: bindActionCreators(fechaFiltroActions,dispatch)
	}
}

DiabetesPage = connect(mapStateToProps,mapDispatchToProps) (DiabetesPage);
export default DiabetesPage;

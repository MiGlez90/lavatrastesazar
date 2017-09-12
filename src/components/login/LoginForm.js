import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {
	Form,
	FormGroup,
	Col,
	Button,
	ControlLabel,
}
from 'react-bootstrap';
import InputBootstrap from "../common/InputBootstrap";
//import FontAwesome from 'react-fontawesome';
//import firebase from '../../firebase';
//import toastr from 'toastr';

class LoginForm extends Component {
	constructor(props){
		super(props);
		this.state = {
			usuario:{
				email: '',
				password: '',
			},
			bandera:{
				longitudPass: true
			}
		};


	}

	handleChange = (e) => {
		let usuario = this.state.usuario;
		usuario[e.target.name] = e.target.value;
		this.setState({usuario});
	}

	handleInPassword = (e) => {
		this.handleChange(e);
		let bandera = this.state.bandera;

		if ( e.target.value.length > 6 ){
			bandera.longitudPass = true;
		}else{
			bandera.longitudPass = false;
		}
		this.setState({bandera});
	}

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.loginWithPassword(this.state.usuario);
	}

	getValidationState  ( cSuccess, cWarning, cError )  {

		if (cSuccess) {
			return 'success';
		}
		else if (cWarning) {
			return  'warning';
		}
		else if (cError) {
			return  'error';
		}
	}

	validarLengthPass  ()  {
		const length = this.state.usuario.password.length;
		const cSuccess = length > 6;
		const cWarning = length > 3;
		const cError = length > 0;
		let bandera = this.getValidationState(cSuccess,cWarning,cError);
		return bandera;
	}


	render() {
		return (
			<Form
				horizontal
				className="form-login"
				onSubmit={this.handleSubmit}
			>
				<InputBootstrap
					label="Email"
					input={{
						required:"required",
						onChange:this.handleChange,
						name:"email",
						type:"email",
						placeholder:"Email",
						min:"6"
					}}

				/>

				<InputBootstrap
					validationState={this.validarLengthPass()}
					label="Contraseña"
					bandera={this.state.bandera.longitudPass}
					mensaje="La cadena debe ser mayor de 6 caracteres"
					validar={true}
					input={{
						required:"required",
						onChange: this.handleInPassword,
						name:"password",
						type:"password",
						placeholder:"Contraseña",

					}}

				/>

				<FormGroup>
					<Col
						sm={12}
						md={12}
					>
						<Button
							bsStyle="primary"
							type="submit"
						>
							Entrar
						</Button>
					</Col>
				</FormGroup>

				<FormGroup>
					<Col
						componentClass={ControlLabel}
					>
						¿Aún no tienes cuenta?
					</Col>
					<NavLink to='/signup'>
						Registrate
					</NavLink>
				</FormGroup>
			</Form>
		);
	}
}

export default LoginForm;

import React, {Component} from 'react';
//import {NavLink} from 'react-router-dom';
import {
	Form,
	FormGroup,
	Col,
	Button
}
	from 'react-bootstrap';
import InputBootstrap from "../common/InputBootstrap";
//import SocialIconsBar from "../common/SocialIconsBar";
//import FontAwesome from 'react-fontawesome';

class SignupForm extends Component {
	constructor(props){
		super(props);
		this.state = {
			usuario:{
				nombres: '',
				apellidos: '',
				email: '',
				password: ''
			},
			bandera:{
				longitudPass: true,
				coincidePass: true
			},
			matchPassword: ''

		}
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

	handleInMatchPassword = (e) => {
		let matchPassword = this.state.matchPassword;
		matchPassword = e.target.value;

		this.setState({matchPassword} , () => {
			let bandera = this.state.bandera;
			if ( this.state.matchPassword === this.state.usuario.password ){
				bandera.coincidePass = true;
			}else{
				bandera.coincidePass = false;
			}
			this.setState({bandera});
		})

	}

	handleSubmit = (e) => {
		e.preventDefault();
		for(let i in this.state.usuario){
			console.log(this.state.usuario[i]);
		}
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

	validarMatchPass ( ) {
		const coincide = this.state.matchPassword;
		const cSuccess = coincide === this.state.usuario.password;
		const cWarning = false;
		const cError = coincide !== this.state.usuario.password;
		let bandera = this.getValidationState(cSuccess,cWarning,cError);
		return bandera;
	}
	render() {
		return (
			<Form
				horizontal
				className="form-signup"
				onSubmit={this.handleSubmit}
			>

				<InputBootstrap
					label="Nombre"
					input={{
						required: "required" ,
						onChange: this.handleChange,
						name: "nombre",
						type : "text",
						placeholder:"Nombre"
					}}

				/>

				<InputBootstrap
					label="Apellido"
					input={{
						required:"required",
						onChange: this.handleChange,
						name:"apellido",
						type:"text",
						placeholder:"Apellido",
					}}

				/>


				<InputBootstrap
					label="Email"
					input={{
						required:"required",
						onChange:this.handleChange,
						name:"email",
						type:"email",
						placeholder:"Email",
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

				<InputBootstrap
					validationState={this.validarMatchPass()}
					label="Confirmar contraseña"
					bandera={this.state.bandera.coincidePass}
					mensaje="La contraseña no coincide"
					validar={true}
					input={{
						required:"required",
						onChange: this.handleInMatchPassword,
						name:"passwordmatch",
						type:"password",
						placeholder:"Confirmar contraseña",

					}}

				/>







				{/*<FormGroup>
						<Col
							sm={12}
							md={12}

						>
							<Checkbox>Remember me</Checkbox>
						</Col>
					</FormGroup>*/}

				<FormGroup>
					<Col
						sm={12}
						md={12}
					>
						<Button
							bsStyle="primary"
							type="submit"
						>
							Registrarse
						</Button>
					</Col>
				</FormGroup>
			</Form>
		);
	}
}

export default SignupForm;

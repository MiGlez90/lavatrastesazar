import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {
	Form,
	FormGroup,
	Col,
	Button,
	FormControl,
	ControlLabel,
}
from 'react-bootstrap';
//import FontAwesome from 'react-fontawesome';

class LoginForm extends Component {
	constructor(props){
		super(props);
		this.state = {
			usuario:{
				email: '',
				password: '',
			}
		};
	}

	handleChange = (e) => {
		let usuario = this.state.usuario;
		usuario[e.target.name] = e.target.value;
		this.setState({usuario});
	}

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.loginWithPassword(this.state.usuario);
	}

	render() {
		return (
			<Form
				horizontal
				className="form-login"
				onSubmit={this.handleSubmit}
			>
				{/*
				<FormGroup>
					<Col componentClass={ControlLabel}>
						Iniciar con
					</Col>
				</FormGroup>

				<FormGroup>
					<FontAwesome
						name="facebook"
						size="2x"
						style={{ margin:'8px 8px', textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
						onClick={this.props.loginWithFacebook}
					/>

					<FontAwesome
						name="twitter"
						size="2x"
						style={{ margin:'8px 8px', textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
						onClick={this.props.loginWithTwitter}
					/>

					<FontAwesome
						name="google"
						size="2x"
						style={{ margin:'8px 8px', textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
						onClick={this.props.loginWithGoogle}
					/>
				</FormGroup>

				<FormGroup>
					<Col componentClass={ControlLabel}>
						o
					</Col>
				</FormGroup>
				*/}
				<FormGroup
					controlId="formHorizontalEmail"
				>
					<Col
						componentClass={ControlLabel}
						sm={12}
						md={12}
						style={{textAlign:"left"}}
					>
						Email
					</Col>
					<Col
						sm={12}
						md={12}
					>
						<FormControl
							required="required"
							onChange={this.handleChange}
							type="email"
							placeholder="Email"
							name="email"
						/>
					</Col>
				</FormGroup>

				<FormGroup
					controlId="formHorizontalPassword"
				>
					<Col
						componentClass={ControlLabel}
						sm={12}
						md={12}
						style={{textAlign:"left"}}
					>
						Contraseña
					</Col>
					<Col
						sm={12}
						md={12}
					>
						<FormControl
							required="required"
							type="password"
							placeholder="Password"
							name="password"
							onChange={this.handleChange}
						/>
					</Col>
				</FormGroup>

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

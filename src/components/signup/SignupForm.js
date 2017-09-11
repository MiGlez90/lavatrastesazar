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


class SignupForm extends Component {
	render() {
		return (
			<Form horizontal className="form-signup">
				{/*
				<FormGroup>
					<Col componentClass={ControlLabel}>
						Registrarse
					</Col>
				</FormGroup>

				<FormGroup>
					<FontAwesome
						name="facebook"
						size="2x"
						style={{ margin:'8px 8px', textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
					/>

					<FontAwesome
						name="twitter"
						size="2x"
						style={{ margin:'8px 8px', textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
					/>

					<FontAwesome
						name="google"
						size="2x"
						style={{ margin:'8px 8px', textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
					/>
				</FormGroup>
				<FormGroup>
					<Col componentClass={ControlLabel}>
						o
					</Col>
				</FormGroup>
				*/}
				<FormGroup controlId="formHorizontalEmail">
					<Col componentClass={ControlLabel} sm={12} md={12} style={{textAlign:"left"}}>
						Nombre
					</Col>
					<Col sm={12} md={12}>
						<FormControl name="nombre" type="text" placeholder="Nombre" />
					</Col>
				</FormGroup>

				<FormGroup controlId="formHorizontalEmail">
					<Col componentClass={ControlLabel} sm={12} md={12} style={{textAlign:"left"}}>
						Nombre
					</Col>
					<Col sm={12} md={12}>
						<FormControl type="email" placeholder="Email" />
					</Col>
				</FormGroup>

				<FormGroup controlId="formHorizontalEmail">
					<Col componentClass={ControlLabel} sm={12} md={12} style={{textAlign:"left"}}>
						Email
					</Col>
					<Col sm={12} md={12}>
						<FormControl type="email" placeholder="Email" />
					</Col>
				</FormGroup>

				<FormGroup controlId="formHorizontalPassword">
					<Col componentClass={ControlLabel} sm={12} md={12} style={{textAlign:"left"}}>
						Contraseña
					</Col>
					<Col sm={12} md={12}>
						<FormControl type="password" placeholder="Password" />
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
					<Col sm={12} md={12}>
						<Button bsStyle="primary" type="submit">
							Entrar
						</Button>
					</Col>
				</FormGroup>

				<FormGroup>
					<Col componentClass={ControlLabel}>
						¿Aún no tienes cuenta?
					</Col>
					<NavLink to='/'>
						Registrate
					</NavLink>
				</FormGroup>
			</Form>
		);
	}
}

export default SignupForm;

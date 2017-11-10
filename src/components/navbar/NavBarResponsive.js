import React, {Component} from 'react';
import {Navbar,NavItem,Nav} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as usuarioActions from '../../actions/usuarioActions';
import './NavBarResponsive.css';

class NavBarResponsive extends Component {
	render(){
		debugger;
		const style = {
			borderRadius: '0px',
			marginBottom: '0px',
			//background: 'rgba(0,0,0,0)'
		};
		return (
			<Navbar
				style={style}
				inverse
				collapseOnSelect
				fixedTop
			>
				<Navbar.Header>
					<LinkContainer to="/">
						<Navbar.Brand >
							AMARE
						</Navbar.Brand>
					</LinkContainer>

					<Navbar.Toggle />
				</Navbar.Header>
				<Navbar.Collapse>
					<Nav>
						<LinkContainer to="/lavatrastesazar">
							<NavItem eventKey="lavatrastes" >
								Coin Toss App
							</NavItem>
						</LinkContainer>

						<LinkContainer to="/diabetes" >
							<NavItem eventKey="diabetes">
								Control Diabetes
							</NavItem>
						</LinkContainer>

						{/*
						<NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
							<MenuItem eventKey={3.1}>Action</MenuItem>
							<MenuItem eventKey={3.2}>Another action</MenuItem>
							<MenuItem eventKey={3.3}>Something else here</MenuItem>
							<MenuItem divider />
							<MenuItem eventKey={3.3}>Separated link</MenuItem>
						</NavDropdown>*/}
					</Nav>

                        { (typeof this.props.usuario === 'undefined' || this.props.usuario === null  ) ?
							<Nav pullRight>
								<LinkContainer to="/login">
									<NavItem eventKey="login" >
										Entrar
									</NavItem>
								</LinkContainer>
								<LinkContainer to="/signup">
									<NavItem eventKey="signup" >
										Sign up
									</NavItem>
								</LinkContainer>
							</Nav>
							:
							<Nav pullRight>
								<NavItem onClick={()=>this.props.usuarioActions.cerrarSesion()} eventKey="cerrasesion" >
									Cerrar Sesión
								</NavItem>
							</Nav>

						}



				</Navbar.Collapse>
			</Navbar>
		);
	}
}

function mapStateToProps(state, ownProps) {
	return {
		usuario: state.usuario
	}
}

function mapDispatchToProps(dispatch) {
	return {
		usuarioActions: bindActionCreators(usuarioActions,dispatch)
	}
}

export default connect(mapStateToProps,mapDispatchToProps) (NavBarResponsive);
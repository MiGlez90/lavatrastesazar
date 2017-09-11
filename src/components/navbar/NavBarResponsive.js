import React, {Component} from 'react';
import {Navbar,NavItem,Nav} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './NavBarResponsive.css';

class NavBarResponsive extends Component {

	render(){
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

						<LinkContainer to="/diabetes">
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
				</Navbar.Collapse>
			</Navbar>
		);
	}
}

export default NavBarResponsive;
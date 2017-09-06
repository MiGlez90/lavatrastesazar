import React, {Component} from 'react';
//import Routes from '../../Routes';
import {NavLink} from 'react-router-dom';
import {Navbar,NavItem,Nav} from 'react-bootstrap';
import './NavBarResponsive.css';

class NavBarResponsive extends Component {
	render(){
		const style = {
			borderRadius: '0px',
			marginBottom: '0px',
			//background: 'rgba(0,0,0,0)'
		};
		return (
			<Navbar style={style} inverse collapseOnSelect fixedTop>
				<Navbar.Header>
					<Navbar.Brand>
						<NavLink  to='/' >
							AMARE
							{/*<FontAwesome
								color='red'
								name='heart'
								size='lg'
								style={{ margin:'1px 8px', textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
							/>*/}
						</NavLink>
					</Navbar.Brand>
					<Navbar.Toggle />
				</Navbar.Header>
				<Navbar.Collapse>
					<Nav>

						<NavItem >
							<NavLink className='noDecoration' to='/lavatrastesazar'>Coin Toss App</NavLink>
						</NavItem>


						<NavItem>
							<NavLink className='noDecoration' to='/diabetes'>Control Diabetes</NavLink>
						</NavItem>
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
						<NavItem eventKey={1} >
							<NavLink className='noDecoration' to="/login">
								Entrar
							</NavLink>
						</NavItem>
						<NavItem eventKey={2} >
							<NavLink className='noDecoration' to="/signup">
								Entrar
							</NavLink>
						</NavItem>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		);
	}
}

export default NavBarResponsive;
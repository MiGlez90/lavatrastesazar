import React, {Component } from 'react';
import {Grid,Row,Col} from 'react-bootstrap';
//import SweetAlert from 'sweetalert-react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as  usuarioActions from '../../actions/usuarioActions';
import './HomePage.css';



class HomePage extends Component{
	state = {
		show: false
	};

	render(){
		return(
			<Grid className="homePage">
				<Row>
					{/*<h1>Hola</h1>*/}
					<Col xs={12} sm={12} md={12}>
						{/*<button onClick={() => this.setState({ show: true })}>Alert</button>*/}
						{/*<SweetAlert*/}
							{/*show={this.state.show}*/}
							{/*title="Demo"*/}
							{/*text="SweetAlert in React"*/}
							{/*onConfirm={() => this.setState({ show: false })}*/}
							{/*type="error"*/}
						{/*/>*/}
					</Col>
				</Row>
			</Grid>
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
		usuarioActions: bindActionCreators(usuarioActions, dispatch)
	}
}

export default connect(mapStateToProps,mapDispatchToProps) (HomePage);
import React, {Component} from 'react';
import '../../App.css';
import './LoginPage.css';
import LoginForm from "./LoginForm";
import * as usuarioActions from '../../actions/usuarioActions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';


class LoginPage extends Component {
	/* TODO hacer funcionalidad para redes sociales
	loginWithFacebook = () => {
		const provider = new firebase.auth.FacebookAuthProvider();
		firebase.auth()
			.signInWithPopup(provider)
			.then( (result ) => {
				console.log(result.user);
				this.props.history.push('/perfil');
			});
	}

	loginWithGoogle = () => {
		alert('ME estoy logeando con Google');
	}

	loginWithTwitter = () => {
		alert('ME estoy logeando con Twitter');
	}
	*/

	loginWithPassword = (user) =>{
		this.props.usuarioActions.iniciarSesion(user);
	};

	render() {
		if(this.props.usuario !== null ){
            console.log(this.props.usuario.uid);
		}

		return (
			<div className="App-flex">
				<LoginForm
					loginWithTwitter = {this.loginWithTwitter}
					loginWithGoogle = {this.loginWithGoogle}
					loginWithFacebook = {this.loginWithFacebook}
					loginWithPassword = {this.loginWithPassword}
				/>
			</div>
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

export default connect(mapStateToProps,mapDispatchToProps) (LoginPage);

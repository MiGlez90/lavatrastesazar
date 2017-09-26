import React, {Component} from 'react';
import '../../App.css';
import './LoginPage.css';
import LoginForm from "./LoginForm";
import * as usuarioActions from '../../actions/usuarioActions';
import * as medidasActions from '../../actions/medidasActions';
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

	componentWillReceiveProps(nP){
        //console.log(this.props.usuario.uid);
		console.log(nP.medidas);
	}

	loginWithPassword = (user) =>{
		console.log(user.email + user.password);
		this.props.usuarioActions.iniciarSesion(user);

	};

	render() {
		if(this.props.usuario !== null ){
            console.log(this.props.usuario.uid);
		}
		if(this.props.medidas !== undefined && this.props.medidas.length > 0){
			console.log(this.props.medidas);
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
		usuario: state.usuario,
		medidas: state.medidas
	}
}

function mapDispatchToProps(dispatch) {
	return {
		usuarioActions: bindActionCreators(usuarioActions,dispatch),
		medidasActions: bindActionCreators(medidasActions,dispatch)
	}
}

export default connect(mapStateToProps,mapDispatchToProps) (LoginPage);

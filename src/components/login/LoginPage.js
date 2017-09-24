import React, {Component} from 'react';
import '../../App.css';
import './LoginPage.css';
import LoginForm from "./LoginForm";
import firebase from '../../firebase';
import toastr from 'toastr';
import * as usuarioActions from '../../actions/usuarioActions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';


class LoginPage extends Component {
	constructor(props){
		super(props);
	}
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
		this.props.usuarioActions.iniciarSesionThunk(user);
		// if (
		// 	typeof user !== 'undefined'
		// 	&& user !== null
		// 	&& user.email !== ''
		// ){
		// 	firebase.auth()
		// 		.signInWithEmailAndPassword(user.email, user.password)
		// 		.then( (result) =>{
		// 			toastr.success("Bienvenido");
		// 			console.log('Ya estoy adentro');
		// 			this.props.history.push('/diabetes');
		// 		})
		// 		.catch( (error) => {
		// 			var errorCode = error.code;
		// 			let errorMessage = '';
		// 			if( errorCode === 'auth/user-not-found'){
		// 				errorMessage = 'Usuario no encontrado';
		// 			}else if(errorCode === 'auth/wrong-password'){
		// 				errorMessage = 'La contraseña es inválida';
		// 			}
        //
		// 			console.log('Algo estuvo mal ' + errorCode);
		// 			toastr.error( errorMessage);
		// 	});
        //
		// }else{
		// 	alert('me siento vacio');
		// }

	}

	render() {
		console.log(this.props.usuario.uid);
		// for(let i in this.props.usuario){
		// 	console.log(this.props.usuario[i]);
		// }
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

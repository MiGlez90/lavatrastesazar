import React, {Component} from 'react';
import '../../App.css';
import './LoginPage.css';
import LoginForm from "./LoginForm";
import firebase from '../../firebase';


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
		if (
			typeof user !== 'undefined'
			&& user !== null
			&& user.email !== ''
		){
			firebase.auth()
				.signInWithEmailAndPassword(user.email, user.password)
				.then( (result) =>{
					//toastr.success("Bienvenido");
					console.log('Ya estoy adentro');
					//this.props.history.push('/perfil');
				})
				.catch( (error) => {
					var errorCode = error.code;
					var errorMessage = error.message;
					console.log('Algo estuvo mal ' + errorMessage);
					//toastr.error("Something wrong" + errorMessage);
			});

		}else{
			alert('me siento vascio');
		}

	}

	render() {
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

export default LoginPage;

import React, {Component} from 'react';
import '../../App.css';
import './LoginPage.css';
import LoginForm from "./LoginForm";
import firebase from '../../firebase';
import toastr from 'toastr';


class LoginPage extends Component {
	constructor(props){
		super(props);
		firebase.auth().onAuthStateChanged( (user) => {
			if (user) {
				console.log(user.uid);
				// var usuario = user.uid;
				// this.setState({user:usuario});
				toastr.error('Debe cerrar sesión');
				this.props.history.push("/diabetes");
			} else {
				// No user is signed in.
				//toastr.error('No ha iniciado sesión');
				//alert('No ha iniciado sesión');

			}
		});
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
		if (
			typeof user !== 'undefined'
			&& user !== null
			&& user.email !== ''
		){
			firebase.auth()
				.signInWithEmailAndPassword(user.email, user.password)
				.then( (result) =>{
					toastr.success("Bienvenido");
					console.log('Ya estoy adentro');
					this.props.history.push('/diabetes');
				})
				.catch( (error) => {
					var errorCode = error.code;
					let errorMessage = '';
					if( errorCode === 'auth/user-not-found'){
						errorMessage = 'Usuario no encontrado';
					}else if(errorCode === 'auth/wrong-password'){
						errorMessage = 'La contraseña es inválida';
					}

					console.log('Algo estuvo mal ' + errorCode);
					toastr.error( errorMessage);
			});

		}else{
			alert('me siento vacio');
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

import React, {Component} from 'react';
import SignupForm from "./SignupForm";
import firebase from '../../firebase';
//import toastr from 'toastr';
import './SignupPage.css';
import toastr from 'toastr';



class SignupPage extends Component {

	signinWithPassword = (user) => {
		firebase.auth()
			.createUserWithEmailAndPassword(user.email, user.password)
			.then((result) => {
				toastr.success('Se ha creado el usuario con éxito');
				firebase.auth()
					.signInWithEmailAndPassword(user.email, user.password)
					.then( (result) =>{
						let userFirebase = firebase.auth().currentUser;
						let fullname = user.nombres + user.apellidos;
						userFirebase.updateProfile({

							displayName: fullname,
							//photoURL: "https://example.com/jane-q-user/profile.jpg"
						}).then(function() {
							toastr.success('Actualizado!');
						}, function(error) {
							toastr.error('Algo mal' + error.message);
						});
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

				//this.props.history.push('/login');
			})
			.catch(function(error) {
				//var errorCode = error.code;
				let errorMessage = error.message;
				console.log('something wrong ' + errorMessage);
				toastr.error('something wrong ' + errorMessage);
			});




	}



	render() {
		return (
			<div className='App-flex'>
				<SignupForm onSubmit={this.signinWithPassword}/>
			</div>
		);
	}
}

export default SignupPage;

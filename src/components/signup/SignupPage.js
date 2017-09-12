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
				this.props.history.push('/login');
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

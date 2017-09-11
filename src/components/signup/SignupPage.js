import React, {Component} from 'react';
import SignupForm from "./SignupForm";
import firebase from '../../firebase';
import './SignupPage.css';


class SignupPage extends Component {

	signinWithPassword = (user) => {
		firebase.auth()
			.createUserWithEmailAndPassword(user.email, user.password)
			.then((result) => {
				this.props.history.push('/login');
			})
			.catch(function(error) {
				//var errorCode = error.code;
				var errorMessage = error.message;
				console.error('something wrong ' + errorMessage);
				//toastr.error(errorCode + errorMessage);
			});
	}

	render() {
		return (
			<div className='App-flex'>
				<SignupForm/>
			</div>
		);
	}
}

export default SignupPage;

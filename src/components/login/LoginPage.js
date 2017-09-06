import React, {Component} from 'react';
import '../../App.css';
import './LoginPage.css';
import LoginForm from "./LoginForm";


class LoginPage extends Component {
	render() {
		return (
			<div className="App-flex">
				<LoginForm/>
			</div>
		);
	}
}

export default LoginPage;

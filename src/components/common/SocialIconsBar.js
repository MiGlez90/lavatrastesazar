import React, {Component} from 'react';
import {Col,ControlLabel,FormGroup} from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

class SocialIconsBar extends Component {
	render() {
		return (
			<div>
				<FormGroup>
					<Col componentClass={ControlLabel}>
						Registrarse
					</Col>
				</FormGroup>

				<FormGroup>
					<FontAwesome
						name="facebook"
						size="2x"
						style={{ margin:'8px 8px', textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
					/>

					<FontAwesome
						name="twitter"
						size="2x"
						style={{ margin:'8px 8px', textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
					/>

					<FontAwesome
						name="google"
						size="2x"
						style={{ margin:'8px 8px', textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
					/>
				</FormGroup>
				<FormGroup>
					<Col componentClass={ControlLabel}>
						o
					</Col>
				</FormGroup>
			</div>
		);
	}
}

export default SocialIconsBar;

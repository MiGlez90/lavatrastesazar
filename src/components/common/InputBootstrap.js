import React, {Component} from 'react';
import {
	FormGroup,
	Col,
	FormControl,
	ControlLabel,
	HelpBlock
} from 'react-bootstrap';

class InputBootstrap extends Component {
	render() {
		return (
			<FormGroup
				controlId="formHorizontalEmail"
				validationState={this.props.validationState}
			>
				<Col
					componentClass={ControlLabel}
					sm={12}
					md={12}
					style={{textAlign:"left"}}
				>
					{this.props.label}
				</Col>
				<Col
					sm={12}
					md={12}
				>

					<FormControl
						{... this.props.input}
					/>
				</Col>

				<FormControl.Feedback />
				<HelpBlock
					style={{
						textAlign:'left',
						paddingLeft:15,
						margin: " 5px 0px 0px 0px"
					}}
				>
					{
						this.props.bandera ?
							'' :
							this.props.mensaje
					}
				</HelpBlock>
			</FormGroup>
		);
	}
}

/*onChange={this.props.handleChange}
name={this.props.name}
type={this.props.type}
placeholder={this.props.placeholder}*/
export default InputBootstrap;

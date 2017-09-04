import React, {Component} from 'react';
import {Row, Grid, Col } from 'react-bootstrap';


class diabetesPage extends  Component
{
	constructor(props){
		super(props);
		this.state = {
			user: ''
		};
	}
	render()
	{
		return (
			<Grid>
				<Row>
					<Col xs={12} sm={12} md={12} lg={12} >
						<h1>I work</h1>
					</Col>
				</Row>
			</Grid>
		);
	}
}

export default diabetesPage;

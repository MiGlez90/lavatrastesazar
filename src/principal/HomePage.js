import React, {Component} from 'react';
import {Grid, Row, Col, Jumbotron, Button } from 'react-bootstrap';
import {NavLink} from 'react-router-dom';

import './HomePage.css'

class HomePage extends Component {
    render(){
        const imageUrl = require(`../assets/img/wash.jpeg`);
        return(
          <div style={{backgroundImage: `url(${imageUrl})`}} className="principalStyle">
                  <Grid >
                      <Row>
                          <Col xs={12} md={12}>
                              <Jumbotron style={{background: 'rgba(255,255,255,0.45)'}}>
                                  <h1>Vamos a probar tu suerte!</h1>
                                  <p>Oprime el botón y veamos quién lavará los trastes!!</p>
                                  <NavLink to="/resultado">
                                      <p><Button bsStyle="primary" onClick={this.mostrarResultado}>Oprímeme!</Button></p>
                                  </NavLink>

                              </Jumbotron>
                          </Col>
                      </Row>
                  </Grid>
          </div>

        );
    }
}

export default HomePage;
import React, {Component} from 'react';
import {Grid, Row, Col, Jumbotron, Button } from 'react-bootstrap';

import './HomePage.css'

class HomePage extends Component {
    constructor(props){
        super(props);
        this.state = {
            victima: '',
            ver: {display:'none'}
        };

    }


    determinarQuienLavaraTrastes = () => {
        var coinToss = Math.floor(Math.random() * 2);
        var victimaL = '';
        switch (coinToss){
            case 0:
                victimaL = 'Miguel';
                break;
            case 1:
                victimaL = 'Lupita';
                break;
            default:
                alert('Algo salió mal');
                break;
        }
        this.setState({victima:victimaL});
    }

    mostrarResultado = () => {
        this.determinarQuienLavaraTrastes();
        let ver = this.state.ver;
        ver['display'] = 'inherit';
        this.setState({ver});
    }
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
                                  <p><Button bsStyle="primary" onClick={this.mostrarResultado}>Oprímeme!</Button></p>

                              </Jumbotron>
                          </Col>
                          <Row style={this.state.ver}>
                              <Col xs={12} md={12}>
                                  <Jumbotron style={{background: 'rgba(255,255,255,0.45)'}}>
                                      <h1 >Felicidades!</h1>
                                      <p >Le toca lavar los platos a {this.state.victima}!</p>

                                  </Jumbotron>
                              </Col>
                          </Row>
                      </Row>
                  </Grid>
          </div>

        );
    }
}

export default HomePage;
import React, {Component} from 'react';
import {Jumbotron,Grid,Row,Col,Button} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import './PaginaResultado.css';

class PaginaResultado extends Component{
    constructor(props){
        super(props);
        var vic = this.determinarQuienLavaraTrastes();
        this.state = {
            victima: vic
        };

    }


    determinarQuienLavaraTrastes = () => {
        var coinToss = Math.floor(Math.random() * 2);
        var victima = '';
        switch (coinToss){
            case 0:
                victima = 'Miguel';
                break;
            case 1:
                victima = 'Lupita';
                break;
            default:
                alert('Algo salió mal');
                break;
        }
        return victima;

    }

    render(){
        const imageUrl = require(`../assets/img/dishes.jpeg`);
        return(
            <div style={{backgroundImage:`url(${imageUrl})`}} className="paginaResultado">
                <Grid>
                    <Row>
                        <Col xs={12} md={12}>
                            <Jumbotron style={{background: 'rgba(34,17,05,0.5)'}}>
                                <h1 style={{ color:'white'}}>Felicidades!</h1>
                                <p style={{ color:'white'}}>Le toca lavar los platos a {this.state.victima}!</p>
                                <NavLink to="/">
                                    <p><Button bsStyle="primary" >De acuerdo!</Button></p>
                                </NavLink>
                            </Jumbotron>
                        </Col>
                    </Row>
                </Grid>
            </div>
                );
        }
    }


export default PaginaResultado;
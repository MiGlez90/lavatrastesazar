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

                </Grid>
            </div>
                );
        }
    }


export default PaginaResultado;
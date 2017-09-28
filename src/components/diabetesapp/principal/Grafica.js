import React from 'react';
import {Line} from 'react-chartjs-2';
import * as moment from 'moment';


/* TODO hacer que funcione */
const Grafica = (props) => {
    let datos = [];
    let etiquetas = [];
    //console.log('This props :' +  props.grafica.data);
    if( typeof props.medidasLista !== 'undefined' && props.medidasLista !== null) {
        const longitud = props.medidasLista.length > 7 ? 7 : props.medidasLista.length;
        for (let i = 0; i < longitud; i++) {
            datos.push(props.medidasLista[i].medida);
            let fechaLarga = props.medidasLista[i].fecha;
            let fechaCorta = moment(fechaLarga, 'DD MMMM YYYY').format('DD MMM');
            etiquetas.push(fechaCorta);
        }
    }

    const data = {
            datasets: [
                {
                    data: datos, //[100,80],
                    backgroundColor: "rgba(75,192,192,0.8)",
                    borderCapStyle: "butt",
                    borderColor: "rgba(75,192,192,1)",
                    borderDash: [],
                    borderDashOffset: 0,
                    borderJoinStyle: "miter",
                    fill: false,
                    label: 'Mis últimos 5 días',
                    lineTension: 0,
                    pointBackgroundColor: '#fff',
                    pointBorderColor: "rgba(75,192,192,1)",
                    pointBorderWidth: 1,
                    pointHitRadius: 10,
                    pointHoverBackgroundColor: "rgba(75,192,192,1)",
                    pointHoverBorderWidth: 2,
                    pointHoverRadius: 5,
                    pointRadius: 1,
                }
            ],
            labels: etiquetas //['cien','ochenta']

            };
    const legend = {
        display: true,
        position: 'down'
    };

    const max = Math.max(...datos) ;
    const min = Math.min(...datos) ;

    const options = {
        scales: {
            yAxes: [{
                ticks: {
                    max: max,
                    min: min
                }
            }]
        }

    };


    return (
        <div style={{marginTop: '10vh'}}>

            <Line data={data} options={options} height={200} legend={legend} responsive={true}/>

        </div>
    );



};

export default Grafica;

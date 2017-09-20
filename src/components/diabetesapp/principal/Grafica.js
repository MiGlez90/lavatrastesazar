import React from 'react';
import {Line} from 'react-chartjs-2';


/* TODO hacer que funcione */
const Grafica = (props) => {
    let datos = [];
    let etiquetas = [];
    //console.log('This props :' +  props.grafica.data);
    const longitud = props.medidasLista.length > 7 ? 7 : props.medidasLista.length ;
        for (let i = 0 ; i < longitud; i++) {
            datos.push( props.medidasLista[i].medida );
            etiquetas.push( props.medidasLista[i].fecha  );
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

    const options = {
        scales: {
            yAxes: [{
                ticks: {
                    max: 200,
                    min: 110
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

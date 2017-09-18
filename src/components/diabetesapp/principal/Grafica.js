import React from 'react';
import {Line} from 'react-chartjs-2';


/* TODO hacer que funcione */
const Grafica = (props) => {
        console.log('This props :' +  props.grafica.data);

        const data = {};
        const options = {};
        const legend = {};

        if ( typeof props.grafica.data !== 'undefined'
		   && props.grafica.data !== null
		   && props.grafica.data.length !== 0 ){

            const data = {
                datasets:[
                    {
                        data: props.grafica.data, //[100,80],
                        backgroundColor:"rgba(75,192,192,0.8)",
                        borderCapStyle:"butt",
                        borderColor: "rgba(75,192,192,1)",
                        borderDash: [],
                        borderDashOffset: 0,
                        borderJoinStyle: "miter",
                        fill: false,
                        label: 'Mis últimos 5 días',
                        lineTension: 0,
                        pointBackgroundColor: '#fff',
                        pointBorderColor:"rgba(75,192,192,1)",
                        pointBorderWidth: 1,
                        pointHitRadius: 10,
                        pointHoverBackgroundColor:"rgba(75,192,192,1)",
                        pointHoverBorderWidth: 2,
                        pointHoverRadius: 5,
                        pointRadius: 1,
                    }
                ],
                labels:  props.grafica.labels //['cien','ochenta']

            };
            const legend = {
                display: true,
                position: 'down'
            };

            const options = {
                scales: {
                    yAxes : [{
                        ticks : {
                            max : 200,
                            min : 110
                        }
                    }]
                }

            };

        }


		return (
        	<div
				style={{
					marginTop:'10vh'
				}}>
                { typeof props.grafica.data !== 'undefined' && props.grafica.data !== null && props.grafica.length !== 0 &&
					<Line data={data} options={options} height={200} legend={legend} responsive={true}/>
                }
			</div>
		);

};

export default Grafica;

import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';

class Grafica extends Component {

	render() {
		const data = {
			datasets:[
				{
					data:[86,90,80,90,100,80,90],
					backgroundColor:"rgba(75,192,192,0.8)",
					borderCapStyle:"butt",
					borderColor: "rgba(75,192,192,1)",
					borderDash: [],
					borderDashOffset: 0,
					borderJoinStyle: "miter",
					fill: false,
					label: 'Mis últimos 5 días',
					lineTension: 0.1,
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
			labels:[
				'Lunes',
				'Martes',
				'Miercoles',
				'Jueves',
				'Viernes',
				'Sabado',
				'Domingo'
			]
		};
		// const legend = {
		// 	display: true,
		// 	position: 'bottom'
		// };

		// const options = {
		// 		scales: {
		// 			yAxes : [{
		// 				ticks : {
		// 					max : 170,
		// 					min : 10
		// 				}
		// 			}]
		// 		}
		//
		// };

		const options = {
			responsive:true
		};
		return (
			<div
				style={{
					marginTop:'10vh'
				}}
			>
				<Line  data={data}  options={options} />
			</div>
		);
	}
}

export default Grafica;

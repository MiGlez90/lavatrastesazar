import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';

class Grafica extends Component {

	render() {


		// console.log('This props :' + this.props.datos);
		const data = {
			datasets:[
				{
					data:this.props.grafica.data, //[100,80],
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
			labels: this.props.grafica.labels //['cien','ochenta']

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

        return (
        	<div
				style={{
					marginTop:'10vh'
				}}>
                {typeof this.props.grafica.data !== 'undefined' && this.props.grafica.data !== null &&
				    <Line data={data} options={options} height={200} legend={legend} responsive={true}/>
                }
			</div>
		);
	}
}

export default Grafica;

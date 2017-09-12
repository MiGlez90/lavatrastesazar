import React, {Component} from 'react';
import {Table} from 'react-bootstrap';

class Tabla extends Component {
	render() {
		const titulos = this.props.data.titulos.map( (titulo) => {
			return (
				<th key={titulo}>{titulo}</th>
			)
		});

		// se crea un array para almacenar array de array con formato
		// tabla html
		let body = [];
		// se obtiene el array de objetos de datos
		const medidas = this.props.data.datos;
		// Por cada objeto en el array
		medidas.forEach( (medida) => {
			// Se crea un array que convertira de objeto a array
			let displayDatos = [];
			// por cada atributo/valor del objeto
			for( let x in medida ){
				//Almacenar en el array
				displayDatos.push(medida[x]);
			}
			// Ya que tenemos el array podemos hacer un map
			let temp = displayDatos.map( (linea,index) => {
				// poner todos los datos del array en un td cada uno
				return <td key={index}>{linea}</td>
			});
			//Se guardan los elementos de un td
			body.push(temp);
		});
		//Por cada lista de td, se encierra en un tr
		const finalBody = body.map((linea) => {
			return <tr>{linea}</tr>
		});

		return (

			<Table responsive pagination>
				<thead>
					<tr>
						{titulos}
					</tr>
				</thead>
				<tbody>
					{finalBody}
				</tbody>
			</Table>

		);
	}
}

export default Tabla;

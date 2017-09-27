import React, {Component} from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

class Tabla extends Component {

	render() {
		const options = {
			page: 1,  // which page you want to show as default
			sizePerPageList: [ {
				text: '2', value: 2
			}, {
				text: '5', value: 5
			}, {
				text: 'Todos', value: this.props.data.length
			} ], // you can change the dropdown list for size per page
			sizePerPage: 8,  // which size per page you want to locate as default
			pageStartIndex: 1, // where to start counting the pages
			paginationSize: 3,  // the pagination bar size.
			//prePage: 'Prev', // Previous page button text
			//nextPage: 'Next', // Next page button text
			//firstPage: 'First', // First page button text
			//lastPage: 'Last', // Last page button text
			//paginationShowsTotal: this.renderShowsTotal,  // Accept bool or function
			paginationPosition: 'bottom',  // default is bottom, top and both is all available
			hideSizePerPage: true //You can hide the dropdown for sizePerPage
			// alwaysShowAllBtns: true // Always show next and previous button
			// withFirstAndLast: false > Hide the going to First and Last page button
		};
		//debugger;

		return (
			<BootstrapTable data={ this.props.data } pagination={ true } options={ options } >
				<TableHeaderColumn dataField='medida' isKey>Medida</TableHeaderColumn>
				<TableHeaderColumn dataField='descripcion'>Descripción</TableHeaderColumn>
				<TableHeaderColumn dataField='fecha'>Fecha</TableHeaderColumn>
			</BootstrapTable>
		);
	}

}

export default Tabla;

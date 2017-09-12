import React, {Component} from 'react';
import {Modal,Button, Form} from 'react-bootstrap';
import InputBootstrap from "../../common/InputBootstrap";

class AgregarMedida extends Component {

	render() {
		const date = new Date().toISOString();
		let dateNow = date.split('T');
		const fechaActual = dateNow[0];
		return (
			<div style={{marginTop:'45vh'}} className="static-modal">
				<Modal {... this.props.modalOptions} >
					<Modal.Header>
						<Modal.Title>Agregar medida</Modal.Title>
					</Modal.Header>

					<Modal.Body>
						<Form
							horizontal
							onSubmit={this.props.onSubmit}
							id="Formulario1"
						>
							<InputBootstrap
								label="Medida"
								input={{
									required:"required",
									onChange:this.props.onChange,
									name:"medida",
									type:"number",
									placeholder:"Medida",
									min: 0,
									max: 700,
									maxLength: "3"
								}}

							/>

							<InputBootstrap
								label="Descripción"
								input={{
									required:"required",
									onChange:this.props.onChange,
									name:"descripcion",
									type:"text",
									placeholder:"Descripción"
								}}

							/>

							<InputBootstrap
								label="Fecha"
								input={{
									required:"required",
									onChange:this.props.onChange,
									name:"fecha",
									type:"date",
									placeholder:"Fecha",
									max: fechaActual
								}}

							/>
						</Form>
					</Modal.Body>

					<Modal.Footer>
						<Button onClick={this.props.onClick}>Cerrar</Button>
						<Button form="Formulario1" type="submit" bsStyle="primary">Guardar Cambios</Button>
					</Modal.Footer>

				</Modal>
			</div>
		);
	}
}

export default AgregarMedida;

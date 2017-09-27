import React from 'react';
import {Modal,Button, Form} from 'react-bootstrap';
import InputBootstrap from "../../common/InputBootstrap";
import * as moment from 'moment';
import 'moment/locale/es';

class AgregarMedida extends React.Component{
    constructor(props) {
        super(props);
        const hoy = moment().format('YYYY-MM-DD');
        this.state = {
            today: hoy,
            medida: {
                medida: 0,
                descripcion: '',
                fecha: hoy
            }
        };
    }

    handleChange = (e) => {
        let targetName = e.target.name;
        let medida = this.state.medida;
        medida[targetName] = e.target.value;
        this.setState({medida,isBlocking:true});

    };

    saveCompra = (e) => {
        e.preventDefault();
        moment.locale('es');
        let medida = this.state.medida;
        medida.mes = moment(medida.fecha,'YYYY-MM-DD').format('MM');
        medida.year = moment(medida.fecha,'YYYY-MM-DD').format('YYYY');
        medida.fecha = moment(medida.fecha,'YYYY-MM-DD').format('DD MMM YYYY');
        this.setState({medida}, ()=>{
            this.props.onSubmit(this.state.medida);
        });

    };

    render() {
        debugger;
        return (
            <div style={{marginTop: '45vh'}} className="static-modal">
                <Modal {...this.props.modalOptions} >
                    <Modal.Header>
                        <Modal.Title>Agregar medida</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Form
                            horizontal
                            onSubmit={this.saveCompra}
                            id="Formulario1">
                            <InputBootstrap
                                label="Medida"
                                input={{
                                    value: this.state.medida.medida,
                                    required: "required",
                                    onChange: this.handleChange,
                                    name: "medida",
                                    type: "number",
                                    placeholder: "Medida",
                                    min: 0,
                                    max: 700,
                                    maxLength: "3",
                                    style: {paddingRight: 0}
                                }}

                            />

                            <InputBootstrap
                                label="Descripción"
                                input={{
                                    value: this.state.medida.descripcion,
                                    required: "required",
                                    onChange: this.handleChange,
                                    name: "descripcion",
                                    type: "text",
                                    placeholder: "Descripción",
                                    style: {paddingRight: 0}
                                }}

                            />

                            <InputBootstrap
                                label="Fecha"
                                input={{
                                    required: "required",
                                    onChange: this.handleChange,
                                    name: "fecha",
                                    type: "date",
                                    placeholder: "Fecha",
                                    max: this.state.today,
                                    value: this.state.medida.fecha,
                                    style: {paddingRight: 0}
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

import React from 'react';
import {Modal,Button, Form} from 'react-bootstrap';
import InputBootstrap from "../../common/InputBootstrap";
import * as moment from 'moment';


const AgregarMedida = (props) => {
    let fechaActual = props.fechaActual;
    fechaActual = moment(fechaActual,['DD MMMM YYYY','YYYY MM DD']).format('YYYY[-]MM[-]DD');
    return (
        <div style={{marginTop:'45vh'}} className="static-modal">
            <Modal {... props.modalOptions} >
                <Modal.Header>
                    <Modal.Title>Agregar medida</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form
                                horizontal
                                onSubmit={props.onSubmit}
                                id="Formulario1"
                    >
                        <InputBootstrap
                            label="Medida"
                            input={{
                                required:"required",
                                onChange:props.onChange,
                                name:"medida",
                                type:"number",
                                placeholder:"Medida",
                                min: 0,
                                max: 700,
                                maxLength: "3",
                                style:{paddingRight:0}
                            }}

                        />

                        <InputBootstrap
                            label="Descripción"
                            input={{
                                required:"required",
                                onChange:props.onChange,
                                name:"descripcion",
                                type:"text",
                                placeholder:"Descripción",
                                style:{paddingRight:0}
                            }}

                        />

                        <InputBootstrap
                            label="Fecha"
                            input={{
                                required:"required",
                                onChange:props.onChange,
                                name:"fecha",
                                type:"date",
                                placeholder:"Fecha",
                                max: fechaActual,
                                value: fechaActual,
                                style:{paddingRight:0}
                            }}

                        />
                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button onClick={props.onClick}>Cerrar</Button>
                    <Button form="Formulario1" type="submit" bsStyle="primary">Guardar Cambios</Button>
                </Modal.Footer>

            </Modal>
        </div>
    );
};

export default AgregarMedida;

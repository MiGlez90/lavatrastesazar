import React from 'react';
import {Modal,Button, Form} from 'react-bootstrap';
import InputBootstrap from "../../common/InputBootstrap";
import {Prompt} from 'react-router-dom';

const AgregarMedida = (props) => {
    const date = new Date().toISOString();
    let dateNow = date.split('T');
    const fechaActual = dateNow[0];
    return (
        <div style={{marginTop:'45vh'}} className="static-modal">
            <Prompt
                when={props.isBlocking}
                message={location => (
                    `¿Estás seguro que quieres salir? Perderas todos tus datos `
                )}
            />
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
                                maxLength: "3"
                            }}

                        />

                        <InputBootstrap
                            label="Descripción"
                            input={{
                                required:"required",
                                onChange:props.onChange,
                                name:"descripcion",
                                type:"text",
                                placeholder:"Descripción"
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
                                max: fechaActual
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

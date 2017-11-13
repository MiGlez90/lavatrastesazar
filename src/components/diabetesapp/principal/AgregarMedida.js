import React from 'react';
import {Modal,Button, Form} from 'react-bootstrap';
import InputBootstrap from "../../common/InputBootstrap";
import * as moment from 'moment';
import 'moment/locale/es';
import {DateTimeFormat} from "../../../index";
import {DatePicker, TextField} from "material-ui";

const AgregarMedida = ({medida, onChange, onChangeFecha, onSubmit, today}) => {
        return (
            <div>
                <form
                    onSubmit={onSubmit}
                    id="Formulario1"
                    className='add-medida-form'>
                    <TextField
                        floatingLabelText='Medida'
                        value={medida.medida}
                        onChange={onChange}
                        name='medida'
                        type='number'
                        hintText='Medida'
                        min={0}
                        max={700}
                        maxLength={3}
                    />

                    <TextField
                        floatingLabelText='Descripción'
                        value={medida.descripcion}
                        onChange={onChange}
                        name='descripcion'
                        hintText='Descripción'
                    />

                    <DatePicker
                        floatingLabelText="Fecha"
                        value={medida.fecha}
                        onChange={onChangeFecha}
                        DateTimeFormat={DateTimeFormat}
                        okLabel="OK"
                        cancelLabel="Cancelar"
                        locale="es"
                        maxDate={today}
                        autoOk={true}
                    />
                </form>
            </div>
        );
};

export default AgregarMedida;

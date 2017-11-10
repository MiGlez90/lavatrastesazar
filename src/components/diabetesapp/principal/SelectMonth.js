import React from 'react';
import {DatePicker, Paper} from "material-ui";
import {DateTimeFormat} from '../../../index';

const SelectMonth = (props) => {
    const {filtro, onChangeInicio, onChangeFinal} = props;
    const today = new Date();
    return (
        <Paper zDepth={3} className='select_range'>
            <h2>Selecciona el rango de fecha</h2>
            <DatePicker
                floatingLabelText="Inicio"
                value={filtro.inicio}
                onChange={onChangeInicio}
                DateTimeFormat={DateTimeFormat}
                okLabel="OK"
                cancelLabel="Cancelar"
                locale="es"
                maxDate={today}
                fullWidth={true}
                autoOk={true}
            />
            <DatePicker
                floatingLabelText="Final"
                value={filtro.final}
                onChange={onChangeFinal}
                DateTimeFormat={DateTimeFormat}
                okLabel="OK"
                cancelLabel="Cancelar"
                locale="es"
                maxDate={today}
                minDate={filtro.inicio}
                fullWidth={true}
                autoOk={true}
            />
        </Paper>
    );
};

export default SelectMonth;
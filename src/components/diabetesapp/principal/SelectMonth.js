import React from 'react';
import {DatePicker, Paper} from "material-ui";


const SelectMonth = (props) => {
    const {onChange,year,month} = props;
    const value = year + '-' + month;
    return (
        <Paper zDepth={3} className='select_range'>
            <h2>Selecciona el rango de fecha</h2>
            <DatePicker
                floatingLabelText="Inicio"
                autoOk={true}
            />
            <DatePicker
                floatingLabelText="Final"
                autoOk={true}
            />
        </Paper>
    );
};

export default SelectMonth;
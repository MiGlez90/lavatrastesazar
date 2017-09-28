import React from 'react';
import {Button} from 'react-bootstrap';
import InputBootstrap from "../../common/InputBootstrap";


const SelectMonth = (props) => {
    const {onChange,year,month} = props;
    const value = year + '-' + month;
    return (
        <div>
            <InputBootstrap
                label="Selecciona el mes"
                input={{
                    onChange: onChange,
                    required: "required",
                    name: "mes",
                    value: value,
                    type: "month",
                    style: {paddingRight: 0,margin:'0px 0px 10px 0px'}
                }}
            />
            <Button
                bsStyle="primary"
                block>
                Aceptar
            </Button>
        </div>
    );
};

export default SelectMonth;
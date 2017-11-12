import React from 'react';
import {Paper} from 'material-ui';

function getAvg(lista) {
    if( typeof lista !== 'undefined' && lista !== null) {
        const sizeList = lista.length;
        if (sizeList > 0) {
            let sum = 0;
            for (let item of lista) {
                sum += parseInt(item.medida, 10);
            }
            return parseFloat((sum / sizeList) * 10 / 10).toFixed(2);
        }else{
            return 0.0;
        }
    }
}

const ShowAverage = (props) => {
    const promedio = getAvg(props.medidas);
    let classN;
    if ( promedio < 120 ){
        classN = 'promedio-aceptable';
    }else if ( promedio >= 120 && promedio < 180 ){
        classN = 'promedio-limite';
    }else {
        classN = 'promedio-peligro'
    }
    return (
        <Paper className="show_average" zDepth={2}>
            <h2 style={{fontSize:'210%'}}>El promedio de este mes</h2>
            <p className={classN} style={{fontSize:'180%'}} >{promedio}</p>
        </Paper>
    );
};

export default ShowAverage;
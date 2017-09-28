import React from 'react';

function getAvg(lista) {
    if( typeof lista !== 'undefined' && lista !== null) {
        const sizeList = lista.length;
        let sum = 0;
        for (let item of lista) {
            sum += parseInt(item.medida,10);
        }
        return parseFloat((sum / sizeList) * 10 / 10);
    }else{
        return 0;
    }
}

const ShowAverage = (props) => {
    return (
        <div>
            <h2 style={{fontSize:'210%'}}>El promedio de este mes</h2>
            <p style={{fontSize:'180%'}} >{getAvg(props.medidas)}</p>
        </div>
    );
};

export default ShowAverage;
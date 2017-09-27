import firebase from 'firebase';
import * as moment from 'moment';

export function loadMedidas(medidas) {
    return { type:"LOAD_MEDIDAS", medidas }
}

export function addMedida(medida){
    return {type:"ADD_MEDIDA", medida}
}


export function deleteMedida(medida){
    return {type:"DELETE_MEDIDA", medida}
}

//////////////// END ACCIONES ////////////////


//////////////// BEGIN THUNKS ////////////////////
//Aqui se hacen las llamadas asíncronas
//Se hace una llamada y en su promesa then
// Se debe de llamar la accion de redux
export function loadListaMedidas(uid) {
    return function (dispatch,getState) {
        return firebase.database().ref( '/medidas/'+ uid + '/' +  moment().format('YYYY') + '/' + moment().format('MM'))
            .once('value').then(
                s => {
                    //moment.locale('es');
                    let lista = [];
                    let medidas = s.val();
                    for(let i in medidas){
                        let item = medidas[i];
                        item.key = i;
                        lista.push(item);
                    }
                    dispatch(loadMedidas(lista));
                });
    }
}

export function saveCompra(medida,uid){
    return function(dispatch, getState){
        return firebase.database().ref("/medidas/"+ uid + '/2017/09')
            .push(medida)
            .then(r=>{
                debugger;
                medida['key'] = r.key;
                dispatch(addMedida(medida));
            })
            .catch(e=>console.log(e));
    }
}

export function removeCompra(medida){
    return function(dispatch, getState){
        let updates = {};
        updates['/medidas/' + medida.key] = null;
        return firebase.database().ref().update(updates)
            .then(r=>dispatch(deleteMedida(medida)))
            .catch(e=>console.log(e));

    }
}


////////////////  END THUNKS /////////////////////
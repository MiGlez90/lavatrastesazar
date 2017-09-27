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

export function vaciarMedidas() {
    return {type:"VACIAR_MEDIDAS", medidas:[]};
}
//////////////// END ACCIONES ////////////////


//////////////// BEGIN THUNKS ////////////////////
//Aqui se hacen las llamadas asíncronas
//Se hace una llamada y en su promesa then
// Se debe de llamar la accion de redux
export function loadListaMedidas(uid,year,month) {
    return function (dispatch,getState) {
        return firebase.database().ref( '/medidas/'+ uid + '/' + year )
            .orderByChild('mes')
            .equalTo(month)
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

export function saveMedida(medida,uid,year){
    return function(dispatch, getState){
        return firebase.database().ref("/medidas/"+ uid + '/' + year)
            .push(medida)
            .then(r=>{
                debugger;
                medida['key'] = r.key;
                dispatch(addMedida(medida));
            })
            .catch(e=>console.log(e));
    }
}

export function removeMedida(medida){
    return function(dispatch, getState){
        let updates = {};
        updates['/medidas/' + medida.key] = null;
        return firebase.database().ref().update(updates)
            .then(r=>dispatch(deleteMedida(medida)))
            .catch(e=>console.log(e));

    }
}


////////////////  END THUNKS /////////////////////
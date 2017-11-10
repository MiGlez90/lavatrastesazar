import {combineReducers} from  'redux';
import medidasReducer from "../reducers/medidasReducer";
import usuarioReducer from "../reducers/usuarioReducer";
import fechaFiltroReducer from "../reducers/fechaFiltroReducer";


const rootReducer = combineReducers({
    medidas:medidasReducer,
    usuario:usuarioReducer,
    fechaFiltro: fechaFiltroReducer
});

export default rootReducer;
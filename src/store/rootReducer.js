import {combineReducers} from  'redux';
import medidasReducer from "../reducers/medidasReducer";
import usuarioReducer from "../reducers/usuarioReducer";


const rootReducer = combineReducers({
    medidas:medidasReducer,
    usuario:usuarioReducer
});

export default rootReducer;
export default function medidasReducer ( state = [], action){
    switch (action.type){
        case "LOAD_MEDIDAS":
            return action.medidas;
        case "ADD_MEDIDA":
            return [...state, action.medida];

        case "DELETE_MEDIDA":
            return [...state.filter(i=>i.key !== action.medida.key)];
        default:
            return state;
    }
}
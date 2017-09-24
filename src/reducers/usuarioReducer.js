export default function usuarioReducer ( state = {} , action ){
    switch(action.type){
        case "INICIAR_SESION":
            if (action.user) {
                return action.user;
            }else{
                return null;
            }

        case "COMPROBAR_USUARIO":
            if (action.usuario) {
                return action.usuario;
            }else{
                return null;
            }

        case "CERRAR_SESION":
            return ;
        default:
            return state;
    }
}
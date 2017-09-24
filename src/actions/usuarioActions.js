import firebase from '../firebase';
import toastr from 'toastr';

export function iniciarSesion(usuario) {
    return {type:"INICIAR_SESION" , usuario};
}

export function cerrarSesion(usuario) {
    return { type:"CERRAR_SESION" , usuario };
}

export function comprobarUsuario(usuario) {
    return { type:"COMPROBAR_USUARIO", usuario};
}

export function iniciarSesionThunk(user) {
    return function (dispatch, getState) {
        if (
            typeof user !== 'undefined'
            && user !== null
            && user.email !== ''
        ) {
            firebase.auth()
                .signInWithEmailAndPassword(user.email, user.password)
                .then((result) => {
                    toastr.success("Bienvenido");
                    console.log('Ya estoy adentro');
                    esUsuarioLogueado(user);
                    //this.props.history.push('/diabetes');
                })
                .catch((error) => {
                    var errorCode = error.code;
                    let errorMessage = '';
                    if (errorCode === 'auth/user-not-found') {
                        errorMessage = 'Usuario no encontrado';
                    } else if (errorCode === 'auth/wrong-password') {
                        errorMessage = 'La contraseña es inválida';
                    }

                    console.log('Algo estuvo mal ' + errorCode);
                    toastr.error(errorMessage);
                });

        } else {
            alert('me siento vacio');
        }
    }
}

export function esUsuarioLogueado() {
    return function (dispatch, getState) {
        firebase.auth().onAuthStateChanged((u) => {
            dispatch(comprobarUsuario(u));
        });
    }
}
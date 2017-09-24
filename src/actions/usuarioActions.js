import firebase from '../firebase';
import toastr from 'toastr';

export function iniciarSesionAction(usuario) {
    return {type:"INICIAR_SESION" , usuario};
}

export function cerrarSesionAction(usuario) {
    return { type:"CERRAR_SESION" , usuario };
}

export function comprobarUsuarioAction(usuario) {
    return { type:"COMPROBAR_USUARIO", usuario};
}

export function iniciarSesion(user) {
    return function (dispatch, getState) {
        if (
            typeof user !== 'undefined'
            && user !== null
            && user.email !== ''
        ) {
            firebase.auth()
                .signInWithEmailAndPassword(user.email, user.password)
                .then((r) => {
                    toastr.success("Bienvenido");
                    console.log('Ya estoy adentro');
                    dispatch(iniciarSesionAction(r.user));
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

export function cerrarSesion() {
    return function (dispatch,getState) {
        firebase.auth().signOut()
            .then( (r) => {
                console.log('Ya sali ', r);
                dispatch(cerrarSesionAction(null));
            }).catch( (error) => {
                console.error('No pude salir');
            });

    }
}

export function comprobarUsuario() {
    return function (dispatch, getState) {
        firebase.auth().onAuthStateChanged((u) => {
            dispatch(comprobarUsuarioAction(u));
        });
    }
}
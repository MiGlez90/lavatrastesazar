import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from 'react-router-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Provider} from 'react-redux';

import '../node_modules/font-awesome/css/font-awesome.min.css';
import 'toastr/build/toastr.min.css';
import '../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import '../node_modules/sweetalert/dist/sweetalert.css';
import '../node_modules/sweetalert2/dist/sweetalert2.min.css';
import configureStore from "./store/configureStore";
import {comprobarUsuario} from "./actions/usuarioActions";
import areIntlLocalesSupported from 'intl-locales-supported';

injectTapEventPlugin();

const store = configureStore();
store.dispatch(comprobarUsuario());

export const storeInmediatly = store;

// configurar DateTimeFormat para que el date picker
// tenga configuracion mexicana
export let DateTimeFormat;
/**
 * Use the native Intl.DateTimeFormat if available, or a polyfill if not.
 */
if (areIntlLocalesSupported(['es', 'es-MX'])) {
    DateTimeFormat = global.Intl.DateTimeFormat;
    console.info(DateTimeFormat.toString());
} else {
    const IntlPolyfill = require('intl');
    DateTimeFormat = IntlPolyfill.DateTimeFormat;
    require('intl/locale-data/jsonp/es');
    require('intl/locale-data/jsonp/es-MX');
}

const WithRouter = () => (

    <BrowserRouter>
        <MuiThemeProvider>
            <App />
        </MuiThemeProvider>
    </BrowserRouter>
);

const WithRedux = () => (
    <Provider store={store}>
        <WithRouter/>
    </Provider>
);


ReactDOM.render(<WithRedux/>, document.getElementById('root'));
registerServiceWorker();

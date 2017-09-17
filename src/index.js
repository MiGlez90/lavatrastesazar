import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from 'react-router-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import '../node_modules/font-awesome/css/font-awesome.min.css';
import 'toastr/build/toastr.min.css';
import '../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import '../node_modules/sweetalert/dist/sweetalert.css';
import '../node_modules/sweetalert2/dist/sweetalert2.min.css';

injectTapEventPlugin();
const WithRouter = () => (

    <BrowserRouter>
        <MuiThemeProvider>
            <App />
        </MuiThemeProvider>
    </BrowserRouter>
);


ReactDOM.render(<WithRouter/>, document.getElementById('root'));
registerServiceWorker();

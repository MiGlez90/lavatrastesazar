import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from 'react-router-dom';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import 'toastr/build/toastr.min.css';
import '../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import '../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

const WithRouter = () => (
    <BrowserRouter>
        <App/>
    </BrowserRouter>
);

ReactDOM.render(<WithRouter/>, document.getElementById('root'));
registerServiceWorker();

import AppContainer from './containers/AppContainer';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import actions from './lib/AppActions';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<AppContainer />, document.getElementById('root'));
actions.addCompany({
    CompanyName: 'XYZ',
    CompanyAddress: 'Kalyani Nagar, Pune',
    CompanyEmail: 'contact@xyz.com',
    CompanyInfo: 'This Service Based Company',
    Selected: true,
});
actions.addCompany({
    CompanyName: 'ABC',
    CompanyAddress: 'Kharadi, Nagar Road, Pune',
    CompanyEmail: 'contact@abc.com',
    CompanyInfo: 'This Service Based Company'
});


registerServiceWorker();

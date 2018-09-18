import AppContainer from './containers/AppContainer';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import actions from './lib/AppActions';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<AppContainer />, document.getElementById('root'));
actions.addCompany({
    CompanyName: 'Cybage',
    CompanyAddress: 'Kalyani Nagar',
    CompanyEmail: 'contact@cybage.com',
    CompanyInfo: 'This Service Based Company',
    Selected: true,
});
actions.addCompany({
    CompanyName: 'Zensar',
    CompanyAddress: 'Kharadi, Nagar Road',
    CompanyEmail: 'contact@zensar.com',
    CompanyInfo: 'This Service Based Company'
});


registerServiceWorker();

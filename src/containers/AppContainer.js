import AppView from '../views/AppView';
import {Container} from 'flux/utils';
import store from '../lib/AppStore';
import actions from '../lib/AppActions';

function getStores() {
  return [
    store,
  ];
}

function getState() {
  return {
    companies: store.getState(),
    onDeleteCompany: actions.deleteCompany,
    onToggleCompany: actions.toggleCompany,
  };
}

export default Container.createFunctional(AppView, getStores, getState);
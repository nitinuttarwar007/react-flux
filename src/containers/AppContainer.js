import AppView from '../views/AppView';
import React, {Component} from 'react';
import {Container} from 'flux/utils';
import store from '../lib/AppStore';
import actions from '../lib/AppActions';

class CompanyContainer extends Component {
  static getStores() {
    return [
      store,
    ];
  }
  
  static calculateState(prevState) {
    return {
      companies: store.getState(),
      onAddCompany: actions.addCompany,
      onDeleteCompany: actions.deleteCompany,
      onToggleCompany: actions.toggleCompany,
    };
  }

  render() {
    return <AppView {...this.state}/>
  }
  
}

export default Container.create(CompanyContainer);
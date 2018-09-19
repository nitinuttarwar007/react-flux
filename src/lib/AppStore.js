import Immutable from 'immutable';
import {ReduceStore} from 'flux/utils';
import actionTypes from './actionTypes';
import AppDispatcher from './AppDispatcher';
import Counter from './counter';
import dataStructure from './dataStructure';

class AppStore extends ReduceStore {

    constructor() {
        super(AppDispatcher);
    }
    
    getInitialState() {
        return Immutable.OrderedMap();
    }

    reduce(state, action) {
        switch (action.type) {
            case actionTypes.ADD_COMPANY:
              if (!action.Company.CompanyName) {
                return state;
              }
              const id = Counter.increment();
                return state.set(id, new dataStructure({
                    id,
                    CompanyName: action.Company.CompanyName,
                    CompanyAddress: action.Company.CompanyAddress,
                    CompanyEmail: action.Company.CompanyEmail,
                    CompanyInfo: action.Company.CompanyInfo,
                    selected: false,
                }
              ));
            
            case actionTypes.DELETE_COMPANY:
              return state.delete(action.id);
      
            case actionTypes.TOGGLE_COMPANY:
              console.log("toggle action", action);
              console.log('state', state);
              
              return state.update(
                action.id,
                dataStructure => dataStructure.set('Selected', !dataStructure.Selected),
              );
      
            default:
              return state;
        }
    }
}

export default new AppStore();


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
              const areAllSelected = state.every(dataStructure => dataStructure.Selected);
              state = state.map(dataStructure => dataStructure.set('Selected', areAllSelected))
              return state.setIn([action.id, 'Selected'], true);
            
              case actionTypes.EDIT_COMPANY:
                state = state.setIn(
                  [action.Company.id, 'CompanyName'], 
                  action.Company.CompanyName
                );
                state = state.setIn(
                  [action.Company.id, 'CompanyAddress'], 
                  action.Company.CompanyAddress
                );
                state = state.setIn(
                  [action.Company.id, 'CompanyEmail'], 
                  action.Company.CompanyEmail
                );
                state = state.setIn(
                  [action.Company.id, 'CompanyInfo'], 
                  action.Company.CompanyInfo
                );
                
                state = state.setIn(
                  [action.Company.id, 'Selected'], 
                  action.Company.Selected
                );

                return state;

            default:
              return state;
        }
    }
}

export default new AppStore();


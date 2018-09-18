import actionTypes from './actionTypes';
import AppDispatcher from './AppDispatcher';

const AppActions = {
    addCompany(Company) {
        AppDispatcher.dispatch({
          type: actionTypes.ADD_COMPANY,
          Company
        });
    },

    deleteCompany(id) {
        AppDispatcher.dispatch({
          type: actionTypes.DELETE_COMPANY,
          id,
        });
    },
    
    toggleCompany(id) {
        AppDispatcher.dispatch({
          type: actionTypes.TOGGLE_COMPANY,
          id,
        });
    },
};

export default AppActions;
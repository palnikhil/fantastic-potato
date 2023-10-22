import { combineReducers } from 'redux';
import invoiceReducer from './invoiceReducer';

const rootReducer = combineReducers({
  invoices: invoiceReducer,
});

export default rootReducer;
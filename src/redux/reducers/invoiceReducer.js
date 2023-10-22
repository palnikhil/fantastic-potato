import * as types from '../actions/invoiceTypes';

const initialState = {
  invoices: [],
  currentInvoice: null,
};

const invoiceReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_INVOICE:
      return {
        ...state,
        invoices: [...state.invoices, action.payload],
      };

    case types.EDIT_INVOICE:
      const updatedInvoices = state.invoices.map((invoice) =>
        invoice.state.id === action.payload.id ? action.payload : invoice
      );
      return {
        ...state,
        invoices: updatedInvoices,
      };

    case types.DELETE_INVOICE:
      const filteredInvoices = state.invoices.filter(
        (invoice) => invoice.state.id !== action.payload
      );
      return {
        ...state,
        invoices: filteredInvoices,
      };

    case types.VIEW_INVOICE:
      let selectedInvoice = state.invoices.find(
        (invoice) => invoice.state.id === action.payload
      );
      selectedInvoice.state.isOpen = true;
      return {
        ...state,
        currentInvoice: selectedInvoice,
      };

    default:
      return state;
  }
};

export default invoiceReducer;

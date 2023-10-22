import * as types from './invoiceTypes';

export const addInvoice = (invoice) => ({
  type: types.ADD_INVOICE,
  payload: invoice,
});

export const editInvoice = (invoice) => ({
  type: types.EDIT_INVOICE,
  payload: invoice,
});

export const deleteInvoice = (id) => ({
  type: types.DELETE_INVOICE,
  payload: id,
});

export const viewInvoice = (id) => ({
  type: types.VIEW_INVOICE,
  payload: id,
});

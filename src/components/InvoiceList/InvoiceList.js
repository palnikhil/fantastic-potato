import React, { useState } from 'react';
import { connect } from 'react-redux';
import { viewInvoice, editInvoice, deleteInvoice } from '../../redux/actions/invoiceActions';
import InvoiceModal from '../InvoiceModal';
import ViewInvoice from './ViewInvoice';

const InvoiceList = (props) => {
  const [isOpen,setIsOpen] = useState(false);

  const handleViewInvoice = (id) => {
    props.dispatch(viewInvoice(id));
    setIsOpen(true)
  };

  const handleEditInvoice = (id) => {
    props.dispatch(editInvoice(id));
  };

  const handleDeleteInvoice = (id) => {
    props.dispatch(deleteInvoice(id));
  };
  const closeModal =() =>{setIsOpen(false)};

  return (
    <div>

      {isOpen && <ViewInvoice showModal={props.currentInvoice.state.isOpen} closeModal={closeModal} info={props.currentInvoice.state} 
                    items={props.currentInvoice.state.items} currency={props.currentInvoice.state.currency} 
                    subTotal={props.currentInvoice.state.subTotal} taxAmmount={props.currentInvoice.state.taxAmmount} 
                    discountAmmount={props.currentInvoice.state.discountAmmount} total={props.currentInvoice.state.total}
        />}
      <h2>Invoice List</h2>
      <ul>
        {console.log(props)}
        {props.invoices.map((invoice) => (
          <li key={invoice.state.id}>
            <strong>Invoice #{invoice.state.id || ''}</strong>
            <p>Date: {invoice.state.dateOfIssue || ''}</p>
            <button onClick={() => handleViewInvoice(invoice.state.id)}>View Invoice</button>
            <button onClick={() => handleEditInvoice(invoice.state.id)}>Edit Invoice</button>
            <button onClick={() => handleDeleteInvoice(invoice.state.id)}>Delete Invoice</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => (
    {
    invoices: state.invoices.invoices,
    currentInvoice:state.invoices.currentInvoice
    }
);

export default connect(mapStateToProps)(InvoiceList);


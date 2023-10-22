import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Container from 'react-bootstrap/Container';
import InvoiceForm from './components/InvoiceForm';
import InvoiceList from './components/InvoiceList/InvoiceList';

function App(){
  // const [showCreateForm, setShowCreateForm] = useState(false);

  // const handleShowCreateForm = () => {
  //   setShowCreateForm(true);
  // };

  return (
    <Provider store={store}>
      <div className="App d-flex flex-column align-items-center justify-content-center w-100">
        <Container>
          <h1>Invoice Management</h1>
          <InvoiceList />
          <InvoiceForm />
        </Container>
      </div>
    </Provider>
  );
}

export default App;

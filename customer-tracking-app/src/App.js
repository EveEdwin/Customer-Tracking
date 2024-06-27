import React from 'react';
import Form from './components/Form';
import AdminPanel from './components/AdminPanel';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <h1>Customer Tracking System</h1>
      <Form />
      <AdminPanel />
    </div>
  );
};

export default App;

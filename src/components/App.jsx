import React from 'react';
import Form from './Form/Form';
import Filtr from './Filtr/Filtr';
import ContactsList from './ContactsList/ContactsList';
import './App.css';

export const App = () => {
  return (
    <div className="App">
      <h1>Phonebook</h1>
      <Form />
      <h2 className="secondTitle">Contacts</h2>
      <Filtr />
      <ContactsList />
    </div>
  );
};

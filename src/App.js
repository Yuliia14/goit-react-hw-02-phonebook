import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import ContactsList from './components/ContactsList/ContactsList';
import ContactsForm from './components/ContactsForm/ContactsForm';
import Filter from './components/Filter/Filter';

export default class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
    filter: ''
  }
  addContact = ({name, number}) => {
    const contact = {
        id: uuidv4(),
        name,
        number
    }

    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, contact]
      }
    })
  }
  removeContact = contactId => {
    this.setState(prevState => {
      return {
      contacts: prevState.contacts.filter(({ id }) => id !== contactId)
      }
    })
  }
  changeFilter = filter => {
    this.setState({ filter })
  }

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    
    return contacts.filter(contact =>
       contact.name.toLowerCase().includes(filter.toLowerCase()),
    )
  }

  render() {
    const { contacts, filter } = this.state;

    const visibleContacts = this.getVisibleContacts();

    return (
    <div>
      <ContactsForm onAddContact={this.addContact}/>
      <Filter filter={filter} onChangeFilter ={this.changeFilter}/>
      {contacts.length > 0 && (
        <ContactsList contacts={visibleContacts} onRemoveContact={this.removeContact}/>
      )}
    </div>
    ) 
  }
}
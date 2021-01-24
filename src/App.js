import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import ContactsList from './components/ContactsList/ContactsList';
import ContactsForm from './components/ContactForm/ContactForm';
import Filter from './components/Filter/Filter';

export default class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  }
  addContact = ({name, number}) => {
    const contact = {
        id: uuidv4(),
        name,
        number
    }
        if (this.state.contacts.find((contact) => contact.name === name)) { 
          console.log(this.state.contacts);
          alert(`${name} is already in contacts`);
        } else {
          this.setState(prevState => {
            return {
              contacts: [...prevState.contacts, contact]
            }
          })
        }  
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
      <h1>Phonebook</h1>
      <ContactsForm onAddContact={this.addContact}/>
      <h2>Contacts</h2>
      <Filter filter={filter} onChangeFilter ={this.changeFilter}/>
      {contacts.length > 0 && (
        <ContactsList contacts={visibleContacts} onRemoveContact={this.removeContact}/>
      )}
    </div>
    ) 
  }
}
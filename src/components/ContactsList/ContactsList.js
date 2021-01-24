import React from 'react';
import PropTypes from 'prop-types';
import s from './ContactList.module.css';
import ContactListItem from './ContactListItem'


const ContactsList = ({contacts, onRemoveContact}) => (
    <ul className= {s.list}>
        {contacts.map(({id, name, number}) => (
            <ContactListItem key={id} name = {name} number = {number} onRemove={() => onRemoveContact(id)}/>
        ))}
    </ul>
)
ContactsList.propTypes = {
    contacts: PropTypes.objectOf(PropTypes.string),
    onRemoveContact: PropTypes.func,
  };

export default ContactsList;
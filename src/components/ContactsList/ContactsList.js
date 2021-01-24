import React from 'react';
import ContactListItem from './ContactListItem'

const ContactsList = ({contacts, onRemoveContact}) => (
    <ul>
        {contacts.map(({id, name, number}) => (
            <ContactListItem key={id} name = {name} number = {number} onRemove={() => onRemoveContact(id)}/>
        ))}
    </ul>
)

export default ContactsList;
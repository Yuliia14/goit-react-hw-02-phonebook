import React from 'react';
// import ContactListItem from '../ContactListItem/ContactListItem'

const ContactsList = ({contacts, onRemoveContact}) => (
    <section>
    <h2>Contacts</h2>
    <ul>
        {contacts.map(({id, name, number}) => (
            <li key={id}>
            <p>{name}: {number}</p>
            <button type="button" onClick={()=> onRemoveContact(id)}>
                Delete contact</button>
        </li>
        ))}
    </ul>
    </section>
)

export default ContactsList;
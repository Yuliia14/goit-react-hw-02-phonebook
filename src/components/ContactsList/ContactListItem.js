import React from 'react';

const ContactListItem = ({name, number, onRemove}) => (
    <li>
        <p>{name}: {number}</p>
        <button type="button" onClick={onRemove}>
        Delete contact</button>
    </li>
)

export default ContactListItem;

import React from 'react';
import PropTypes from 'prop-types';
import s from './ContactList.module.css';

const ContactListItem = ({name, number, onRemove}) => (
    <li className= {s.item}>
        <p className={s.text}>{name}: {number}</p>
        <button type="button" onClick={onRemove}>
        Delete contact</button>
    </li>
)

ContactListItem.propTypes = {
    name: PropTypes.string,
    number: PropTypes.number,
    onRemove: PropTypes.func,
  };

export default ContactListItem;

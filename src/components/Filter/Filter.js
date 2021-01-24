import React from 'react';
import PropTypes from 'prop-types';
import s from './Filter.module.css';

export default function Filter({value, onChangeFilter}) {
    return (
    <div>
        <input
            type="text"
            className= {s.input}
            name="filter"  
            value={value}
            onChange={e => onChangeFilter(e.target.value)}
        />
    </div>
    )}

    Filter.propTypes = {
        value: PropTypes.string,
        onChangeFilter: PropTypes.func,
    };
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './ContactForm.module.css';

export default class ContactsForm extends Component {
    state = {
        name: '',
        number: ''
      }

    static propTypes = {
        name: PropTypes.string.isRequired,
        number: PropTypes.number.isRequired,
    };

    handleChange = e => {
        const {name, value} = e.target;
        this.setState({
            [name]: value
        });
    }

    handleSubmit = e => {
        e.preventDefault();
        const {name, number} = this.state;

        this.props.onAddContact({name, number})

        this.setState({
            name: '',
            number: ''
        });
    }

    render() {
        const {name, number} = this.state;

        return(
            <form className= {s.form} onSubmit={this.handleSubmit}>
                <div className= {s.formInputs}>
                    <label className= {s.label}>
                    Name
                    <input
                        type="text"
                        placeholder="Enter name"
                        className= {s.input}
                        name='name'
                        value={name}
                        onChange={this.handleChange}
                    />
                    </label>
                    <label className= {s.label}>
                    Number
                    <input
                        type="tel"
                        placeholder="Enter number"
                        className= {s.input}
                        name='number'
                        value={number}
                        onChange={this.handleChange}
                    />
                    </label>
                </div>
                <button type="submit" className= {s.button}><span className={s.span}>Add contact {name}</span></button>
            </form>
        )        
    }
}
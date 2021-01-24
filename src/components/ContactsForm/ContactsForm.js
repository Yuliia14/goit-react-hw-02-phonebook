import React, { Component } from 'react';

export default class ContactsForm extends Component {
    state = {
        name: '',
        number: ''
      }
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
            <form onSubmit={this.handleSubmit}>
                <label>
                Name
                <input
                    type="text"
                    placeholder="Enter name"
                    name='name'
                    value={name}
                    onChange={this.handleChange}
                />
                </label>
                <label>
                Number
                <input
                    type="tel"
                    placeholder="Enter number"
                    name='number'
                    value={number}
                    onChange={this.handleChange}
                />
                </label>

                <button type="submit">Add contact {name}</button>
            </form>
        )        
    }
}
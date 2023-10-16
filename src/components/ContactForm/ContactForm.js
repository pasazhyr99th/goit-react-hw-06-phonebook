import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { FormStyle, FormLabel, FormInput, FormBtn } from './ContactForm.styled';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  nameInputId = nanoid();
  numberInputId = nanoid();

  handleChange = e => {
    const { name, value } = e.currentTarget;

    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { name } = this.state;

    const isExist = this.props.isContactNameExists(name);

    if (isExist) {
      return alert(`${name} is already in contacts!`);
    }

    this.props.onSubmit(this.state);

    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <FormStyle onSubmit={this.handleSubmit}>
        <FormLabel htmlFor={this.nameInputId}>
          Name
          <FormInput
            type="text"
            name="name"
            id={this.nameInputId}
            value={name}
            onChange={this.handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </FormLabel>
        <FormLabel htmlFor={this.numberInputId}>
          Number
          <FormInput
            type="tel"
            name="number"
            id={this.numberInputId}
            value={number}
            onChange={this.handleChange}
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </FormLabel>
        <FormBtn type="submit">Add contact</FormBtn>
      </FormStyle>
    );
  }
}

export default ContactForm;

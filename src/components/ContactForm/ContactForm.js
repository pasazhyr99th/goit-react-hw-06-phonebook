import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { FormStyle, FormLabel, FormInput, FormBtn } from './ContactForm.styled';

export default function ContactForm({ onSubmit, isContactNameExists }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const handleChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    const isExist = isContactNameExists(name);

    if (isExist) {
      return alert(`${name} is already in contacts!`);
    }

    onSubmit({ name, number });

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <FormStyle onSubmit={handleSubmit}>
      <FormLabel htmlFor={nameInputId}>
        Name
        <FormInput
          type="text"
          name="name"
          id={nameInputId}
          value={name}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </FormLabel>
      <FormLabel htmlFor={numberInputId}>
        Number
        <FormInput
          type="tel"
          name="number"
          id={numberInputId}
          value={number}
          onChange={handleChange}
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </FormLabel>
      <FormBtn type="submit">Add contact</FormBtn>
    </FormStyle>
  );
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  isContactNameExists: PropTypes.func.isRequired,
};

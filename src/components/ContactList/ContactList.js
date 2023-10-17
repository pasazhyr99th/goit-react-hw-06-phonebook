import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { ListContainer, ListItem, ListDeleteBtn } from './ContactList.styled';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter.inputValue);

  const getFilteredContacts = () => {
    const normalizedFilter = filter ? filter.toLowerCase() : '';
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filteredContacts = getFilteredContacts();

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ListContainer>
      {filteredContacts.map(({ id, name, number }) => (
        <ListItem key={id}>
          <p>
            {name}: {number}
          </p>
          <ListDeleteBtn onClick={() => handleDelete(id)}>Delete</ListDeleteBtn>
        </ListItem>
      ))}
    </ListContainer>
  );
};

export default ContactList;

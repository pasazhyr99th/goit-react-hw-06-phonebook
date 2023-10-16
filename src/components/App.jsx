// import React, { useState, useEffect } from 'react';
// import ContactForm from './ContactForm';
// import ContactList from './ContactList';
// import Filter from './Filter';
// import { Container } from './App.styled';
// import { nanoid } from 'nanoid';

// const defaultContacts = [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];

// const useLocalStorage = (key) => {
//   const [state, setState] = useState(() => {
//     return JSON.parse(window.localStorage.getItem(key)) ?? defaultContacts;
//   });

//   useEffect(() => {
//     window.localStorage.setItem(key, JSON.stringify(state));
//   }, [key, state]);

//   return [state, setState];
// };

// export default function App() {
//   const [contacts, setContacts] = useLocalStorage('contacts');
//   const [filter, setFilter] = useState('');

//   const addContact = ({ name, number }) => {
//     const contact = {
//       id: nanoid(),
//       name,
//       number,
//     };

//     setContacts(prevContacts => [...prevContacts, contact]);
//   };

//   const deleteContact = contactId => {
//     setContacts(prevContacts =>
//       prevContacts.filter(contact => contact.id !== contactId)
//     );
//   };

//   const isContactNameExists = name => {
//     return contacts.some(contact => contact.name === name);
//   };

//   const changeFilter = e => {
//     setFilter(e.currentTarget.value);
//   };

//   const getFilteredContacts = () => {
//     const normalizedFilter = filter.toLowerCase();
//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normalizedFilter)
//     );
//   };

//   const formSubmitHandler = data => {
//     addContact(data);
//   };

//   return (
//     <Container>
//       <h1>Phonebook</h1>
//       <ContactForm
//         onSubmit={formSubmitHandler}
//         isContactNameExists={isContactNameExists}
//       />

//       <h2>Contacts</h2>
//       <Filter value={filter} onChange={changeFilter} />
//       <ContactList
//         contacts={getFilteredContacts()}
//         onDeleteContact={deleteContact}
//       />
//     </Container>
//   );
// }

// App.js
import React from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import { Container } from './App.styled';
import { useSelector, useDispatch } from 'react-redux';
import { addContact, deleteContact, updateFilter } from '../redux/contactSlice';

export default function App() {
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  const isContactNameExists = name => {
    return contacts.some(contact => contact.name === name);
  };

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const formSubmitHandler = data => {
    dispatch(addContact(data));
  };

  const deleteContactHandler = contactId => {
    dispatch(deleteContact(contactId));
  };

  const changeFilterHandler = e => {
    dispatch(updateFilter(e.currentTarget.value));
  };

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm
        onSubmit={formSubmitHandler}
        isContactNameExists={isContactNameExists}
      />

      <h2>Contacts</h2>
      <Filter value={filter} onChange={changeFilterHandler} />
      <ContactList
        contacts={getFilteredContacts()}
        onDeleteContact={deleteContactHandler}
      />
    </Container>
  );
}

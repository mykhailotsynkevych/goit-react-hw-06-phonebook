import PropTypes from 'prop-types';
import s from './Contacts.module.css';
import ContactsEl from './ContactsEl';

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import contactsActions from '../../redux/todos/contacts-actions';
import { getVisibleTodos } from '../../redux/todos/contacts-selectors';

const ContactsList = () => {
  const contactsList = useSelector(getVisibleTodos);
  const dispatch = useDispatch();

  const onDeleteContact = id => dispatch(contactsActions.deleteContact(id));

  return (
    <div className={s.wrap}>
      <ul className={s.list}>
        {contactsList.map(({ id, name, number }) => (
          <li key={id}>
            <ContactsEl
              name={name}
              number={number}
              onDeleteContact={() => onDeleteContact(id)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

ContactsList.propTypes = {
  contactEl: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      onDeleteContact: PropTypes.func.isRequired,
    })
  ),
};

export default ContactsList;

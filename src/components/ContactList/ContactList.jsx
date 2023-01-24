import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getFilteredContacts } from 'redux/selectors/selectors';
import { getContactsThunk, removeContactsThunk } from "redux/thunks/contactsThunks";

export const ContactList = function ( ) {
  const dispatch = useDispatch()

  const filteredContacts = useSelector(getFilteredContacts)

  useEffect(() => {
    dispatch(getContactsThunk())
  }, [dispatch]);

  
  const contactDelete = id => {
    dispatch(removeContactsThunk(id))
  }

  return (
      <>
      <ul>
        { filteredContacts.map(({id, name, number }) => (
          <li key={id}>
            <p>{name}:{number}</p>
            <button type="button"  onClick = {() => contactDelete(id)}>Delete</button>
          </li> 
        ))}
      </ul>
      </>
  );
}
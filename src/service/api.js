import axios from 'axios';

const contactsAPI = axios.create({
  baseURL: `https://63cf9f378a780ae6e6793c5d.mockapi.io/contacts/`
});

export const getItemsContacts = async () => {
 const { data } = await contactsAPI.get();
 return data;
};

export const removeItemsContacts = async (id) => {
  const { data } = await contactsAPI.delete(id);
  return data;
 };

export const addItemsContacts = async (contact) => {
 const { data } = await contactsAPI.post('', contact);
 return data;
};

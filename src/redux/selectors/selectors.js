import { createSelector } from "@reduxjs/toolkit";

export const getContacts = state => state.contacts.contacts;

export const getFilter = state => state.filter;

export const getFilteredContacts = createSelector([getContacts, getFilter], (contacts, filter)  => {
  return contacts.filter(contact =>
    contact.name.toUpperCase().includes(filter.toUpperCase())
    );
})
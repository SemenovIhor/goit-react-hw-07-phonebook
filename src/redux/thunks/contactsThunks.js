import { createAsyncThunk } from "@reduxjs/toolkit";
import { getItemsContacts, removeItemsContacts, addItemsContacts } from "service/api"

export const getContactsThunk = createAsyncThunk("contacts/fetchAll", async (_, thunkAPI) => {
  try {
    const data = await getItemsContacts()
    return data
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message)
  }
});

export const removeContactsThunk = createAsyncThunk("contacts/deleteContact", async (id, thunkAPI) => {
  try {
    const data = await removeItemsContacts(id)
    return data.id
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message)
  }
});

export const addContactsThunk = createAsyncThunk("contacts/addContact", async (contact, thunkAPI) => {
  try {
    const data = await addItemsContacts(contact)
    return data
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message)
  }
});

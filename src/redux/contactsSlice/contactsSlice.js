import { createSlice  } from '@reduxjs/toolkit'
import { addContactsThunk, getContactsThunk, removeContactsThunk } from 'redux/thunks/contactsThunks'

const initialState = {
  error: null,
  isLoading: false,
  contacts: [],
}
export const contactsSlice = createSlice({
  name: 'contacts', 
  initialState: initialState,
  reducers: {
    addContacts: (state, action) => {
      state.contacts = [...state.contacts, action.payload]
    },
  },
  extraReducers: builder => {
    builder.addCase(getContactsThunk.pending, (state) => { 
      state.isLoading = true
     }).addCase(getContactsThunk.fulfilled, (state, action) => {
      state.contacts = action.payload
      state.isLoading = false
      state.error = null
     }).addCase(getContactsThunk.rejected, (state, action) => {
      state.contacts = []
      state.error = action.payload
      state.isLoading = false
     }).addCase(removeContactsThunk.pending, (state) => { 
      state.isLoading = true
     }).addCase(removeContactsThunk.fulfilled, (state, action) => {
      state.contacts = state.contacts.filter((item) => item.id !== action.payload)
      state.isLoading = false
      state.error = null
     }).addCase(removeContactsThunk.rejected, (state, action) => {
      state.contacts = []
      state.error = action.payload
      state.isLoading = false
     }).addCase(addContactsThunk.pending, (state) => { 
      state.isLoading = true
     }).addCase(addContactsThunk.fulfilled, (state, action) => {
      state.contacts = [...state.contacts, action.payload]
      state.isLoading = false
      state.error = null
     }).addCase(addContactsThunk.rejected, (state, action) => {
      state.contacts = []
      state.error = action.payload
      state.isLoading = false
     });
  },
})
 
export const contactsReducer = contactsSlice.reducer;

// export const { addContacts, removeContacts } = contactsSlice.actions;

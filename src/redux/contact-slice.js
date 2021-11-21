// import { createSlice } from '@reduxjs/toolkit';
// import { filterContact } from './actions';
// import { getContacts } from './operations';
// // import {addContact, deleteContact } from './operations';

// const initialState = {
//   items: [],
//   filter: '',
//   loading: false,
//   error: null,
// };

// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState,
//   extraReducers: {
//     [getContacts.fulfilled](state, action) {
//       state.loading = false;
//       state.items = action.payload.items;
//     },
//     [getContacts.pending](state, action) {
//       state.loading = true;
//     },
//     [getContacts.rejected](state, action) {
//       state.loading = false;
//       state.error = action.payload;
//     },
//     [filterContact](state, action) {
//       state.filter = action.payload;
//     },
//   },
// });

// export default contactsSlice.reducer;

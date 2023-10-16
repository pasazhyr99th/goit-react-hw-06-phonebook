// filtersSlice.js
import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: '',
  reducers: {
    updateFilter: (state, action) => {
      return action.payload;
    },
  },
});

export const { updateFilter } = filtersSlice.actions;
export default filtersSlice.reducer;

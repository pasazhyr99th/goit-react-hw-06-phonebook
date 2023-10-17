import { createSlice } from '@reduxjs/toolkit';

const initialInput = { inputValue: '' };

const filterSlice = createSlice({
  name: 'filters',
  initialState: initialInput,
  reducers: {
    updateFilter: {
      reducer: (state, action) => {
        state.inputValue = action.payload;
      },

      prepare: inputValue => {
        return {
          payload: inputValue,
        };
      },
    },
  },
});

export const { updateFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;

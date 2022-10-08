import { createSlice } from '@reduxjs/toolkit';

import {
  getHeroes,
  getHeroById,
  addNewHero,
  deleteHero,
  updateHero,
} from './heroesOperations';

const initialState = {
  items: [],
  hero: null,
  isLoading: false,
  error: '',
};

export const heroesSlice = createSlice({
  name: 'heroes',
  initialState,
  extraReducers: {
    // ------------ getHeroes ------------

    [getHeroes.pending]: (state, _) => {
      state.isLoading = true;
      state.error = '';
    },
    [getHeroes.fulfilled]: (state, action) => {
      state.isLoading = false;

      if (action.payload.length > 0) {
        state.items = action.payload;
      }
    },
    [getHeroes.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload.message;
    },
    // ------------ getHeroById ------------

    [getHeroById.pending]: (state, _) => {
      state.isLoading = true;
      state.error = '';
    },
    [getHeroById.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.hero = action.payload;
    },
    [getHeroById.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload.message;
    },
    // ------------ addNewHero ------------

    [addNewHero.pending]: (state, _) => {
      state.isLoading = true;
      state.error = '';
    },
    [addNewHero.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.items = [...state.items, action.payload];
    },
    [addNewHero.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload.message;
    },
    // ------------ deleteContact ------------

    [deleteHero.pending]: (state, _) => {
      state.isLoading = true;
      state.error = '';
    },
    [deleteHero.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    [deleteHero.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload.message;
    },
    // ------------ updateHero ------------

    [updateHero.pending]: (state, _) => {
      state.isLoading = true;
      state.error = '';
    },
    [updateHero.fulfilled]: (state, action) => {
      state.isLoading = false;
      const index = state.items.findIndex(id => id === action.payload.id);
      state.items = state.items.splice(index, 1, action.payload);
    },
    [updateHero.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload.message;
    },
  },
});

export default heroesSlice.reducer;

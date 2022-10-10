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
  isEditModeOn: false,
  isLoading: false,
  error: '',
};

export const heroesSlice = createSlice({
  name: 'heroes',
  initialState,
  reducers: {
    setHero: (state, action) => {
      state.hero = action.payload;
    },
    setIsEditModeOn: (state, action) => {
      state.isEditModeOn = action.payload;
    },
  },
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
      state.hero = null;
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
      state.items = state.items.filter(item => item._id !== action.payload);
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
      const index = state.items.findIndex(
        item => item._id === action.payload._id
      );
      state.items.splice(index, 1, action.payload);
      state.hero = null;
      state.isEditModeOn = false;
    },
    [updateHero.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload.message;
    },
  },
});

export const { setHero, setIsEditModeOn } = heroesSlice.actions;

export default heroesSlice.reducer;

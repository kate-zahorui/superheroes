import { createAsyncThunk } from '@reduxjs/toolkit';
import { UserAPI } from '../../services/api';

export const getHeroes = createAsyncThunk(
  'heroes/getHeroes',
  async (_, { rejectWithValue }) => {
    try {
      const heroes = await UserAPI.fetchHeroes();
      return heroes;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getHeroById = createAsyncThunk(
  'heroes/getHeroById',
  async (heroId, { rejectWithValue }) => {
    try {
      const hero = await UserAPI.fetchHeroById(heroId);
      return hero;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addNewHero = createAsyncThunk(
  'heroes/addHero',
  async (newHero, { rejectWithValue }) => {
    try {
      const hero = await UserAPI.addNewHero(newHero);
      return hero;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteHero = createAsyncThunk(
  'heroes/deleteHero',
  async (heroId, { rejectWithValue }) => {
    try {
      await UserAPI.deleteHero(heroId);
      return heroId;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const updateHero = createAsyncThunk(
  'heroes/updateHero',
  async ({ heroId, hero }, { rejectWithValue }) => {
    try {
      await UserAPI.updateHero(heroId, hero);
      return heroId;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

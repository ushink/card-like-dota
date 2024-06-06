import { createSlice } from "@reduxjs/toolkit";
import { HeroStats } from "../models/models";

const dotaSlice = createSlice({
  name: "dota",
  initialState: {
    heroes: [],
    heroesFav: [],
    currentHeroes: [],
    hero: null,
    hasRunOnce: false,
  },
  selectors: {
    selectHeroes: (state): HeroStats[] => state.heroes, // TODO: правильная ли тут типизиция
    selectHeroesFav: (state): HeroStats[] => state.heroesFav,
    selectHero: (state): HeroStats | null => state.hero,
    selectCurrentHeroes: (state): HeroStats[] => state.currentHeroes,
    selectHasRunOnce: (state): boolean => state.hasRunOnce,
  },
  reducers: {
    setHeroes: (state, action) => {
      state.heroes = action.payload;
    },

    setHeroesFav: (state, action) => {
      state.heroesFav = action.payload;
    },

    setHero(state, action) {
      state.hero = action.payload;
    },

    setCurrentHeroes(state, action) {
      state.currentHeroes = action.payload;
    },

    setHasRunOnce(state, action) {
      state.hasRunOnce = action.payload;
    },
  },
});

export const {
  setHeroes,
  setHeroesFav,
  setHero,
  setCurrentHeroes,
  setHasRunOnce,
} = dotaSlice.actions;

export const {
  selectHeroes,
  selectHeroesFav,
  selectHero,
  selectCurrentHeroes,
  selectHasRunOnce,
} = dotaSlice.selectors;

export default dotaSlice.reducer;

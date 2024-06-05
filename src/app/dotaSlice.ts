import { createSlice } from "@reduxjs/toolkit";
import { HeroStats } from "../models/models";

const dotaSlice = createSlice({
  name: "dota",
  initialState: {
    heroes: [],
    heroesFav: [],
    currentHeroes: [],
    hero: null,
  },
  selectors: {
    selectHeroes: (state): HeroStats[] => state.heroes, // TODO: правильная ли тут типизиция
    selectHeroesFav: (state): HeroStats[] => state.heroesFav,
    selectHero: (state): HeroStats | null => state.hero,
    selectCurrentHeroes: (state): HeroStats[] => state.currentHeroes,
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
  },
});

export const { setHeroes, setHeroesFav, setHero, setCurrentHeroes } =
  dotaSlice.actions;

export const {
  selectHeroes,
  selectHeroesFav,
  selectHero,
  selectCurrentHeroes,
} = dotaSlice.selectors;

export default dotaSlice.reducer;

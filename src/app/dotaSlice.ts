import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { HeroStats } from "../models/models";

interface InitialState {
  heroes: HeroStats[] | null;
  heroesFav: HeroStats[] | null;
  currentHeroes: HeroStats[] | null;
  hero: HeroStats | null;
  hasRunOnce: boolean;
}

const initialState: InitialState = {
  heroes: [],
  heroesFav: [],
  currentHeroes: [],
  hero: null,
  hasRunOnce: false,
};

const dotaSlice = createSlice({
  name: "dota",
  initialState,
  selectors: {
    selectHeroes: (state): HeroStats[] | null => state.heroes,
    selectHeroesFav: (state): HeroStats[] | null => state.heroesFav,
    selectHero: (state): HeroStats | null => state.hero,
    selectCurrentHeroes: (state): HeroStats[] | null => state.currentHeroes,
    selectHasRunOnce: (state): boolean => state.hasRunOnce,
  },
  reducers: {
    setHeroes: (state, action: PayloadAction<HeroStats[]>) => {
      state.heroes = action.payload;
    },

    setHeroesFav: (state, action: PayloadAction<HeroStats[]>) => {
      state.heroesFav = action.payload;
    },

    setHero(state, action: PayloadAction<HeroStats>) {
      state.hero = action.payload;
    },

    setCurrentHeroes(state, action: PayloadAction<HeroStats[]>) {
      state.currentHeroes = action.payload;
    },

    setHasRunOnce(state, action: PayloadAction<boolean>) {
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

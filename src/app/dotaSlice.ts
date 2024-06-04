import { createSlice } from "@reduxjs/toolkit";
import { HeroStats } from "../models/models";

const dotaSlice = createSlice({
  name: "dota",
  initialState: {
    heroes: [],
    heroesFav: [],
    hero: null,
  },
  selectors: {
    selectHeroes: (state): HeroStats[] => state.heroes, // TODO: правильная ли тут типизиция
    selectHeroesFav: (state): HeroStats[] => state.heroesFav,
    selectHero: (state): HeroStats | null => state.hero,
  },
  reducers: {
    setHeroes: (state, action) => {
      state.heroes = action.payload;
    },

    setHeroesFav: (state) => {
      state.heroesFav = state.heroes.filter(
        (el: HeroStats) => el.isLike === true
      );
    },

    setHero(state, action) {
      state.hero = action.payload;
    },
  },
});

export const { setHeroes, setHeroesFav, setHero } = dotaSlice.actions;

export const { selectHeroes, selectHeroesFav, selectHero } =
  dotaSlice.selectors;

export default dotaSlice.reducer;

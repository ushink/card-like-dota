import { createSlice } from "@reduxjs/toolkit";
import { HeroStats } from "../models/models";

const dotaSlice = createSlice({
  name: "dota",
  initialState: {
    heroes: [],
  },
  selectors: {
    selectHeroes: (state): HeroStats[] => state.heroes, // TODO: правильная ли тут типизиция
  },
  reducers: {
    setHeroes: (state, action) => {
      state.heroes = action.payload;
    },
  },
});

export const { setHeroes } = dotaSlice.actions;

export const { selectHeroes } = dotaSlice.selectors;

export default dotaSlice.reducer;

import { configureStore } from "@reduxjs/toolkit";
import { dotaApi } from "../services/heroes";
import dotaSlice from "./dotaSlice";

export const store = configureStore({
  reducer: {
    dota: dotaSlice,
    [dotaApi.reducerPath]: dotaApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(dotaApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

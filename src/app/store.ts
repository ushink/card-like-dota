import { configureStore } from "@reduxjs/toolkit";
import { dotaApi } from "../services/heroes";

export const store = configureStore({
  reducer: {
    [dotaApi.reducerPath]: dotaApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(dotaApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

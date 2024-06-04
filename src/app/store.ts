import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { dotaApi } from "../services/heroes";
import dotaReducer from "./dotaSlice";
import storage from "redux-persist/lib/storage";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from "redux-persist";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  blacklist: [dotaApi.reducerPath],
};

const rootReducer = combineReducers({
  dota: dotaReducer,
  [dotaApi.reducerPath]: dotaApi.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer); //TODO: не работает сохранение в store

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat( dotaApi.middleware),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { dotaApi } from "../services/heroes";
import dotaReducer from "./dotaSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
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
        // Игнорировать эти типы действий
        ignoredActions: ["persist/PERSIST"],
        // Игнорировать эти пути полей во всех действиях
        ignoredActionPaths: ["meta.arg", "payload.timestamp"],
        // Игнорировать эти пути в состоянии
        ignoredPaths: ["items.dates"],
      },
    }).concat(dotaApi.middleware),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

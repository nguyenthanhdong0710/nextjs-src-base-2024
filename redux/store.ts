import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import packageInfo from "@/package.json";
import commonReducer from "./commonReducer";
import snackbarReducer from "./snackbarReducer";
import sidebarReducer from "./sidebarReducer";

export const key = packageInfo.name || "iWeather";

const rootReducer = combineReducers({
  snackbar: snackbarReducer,
  common: commonReducer,
  sidebar: sidebarReducer,
});

const persistedReducer = persistReducer(
  {
    key,
    storage,
    whitelist: ["common"],
  },
  rootReducer,
);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof rootReducer>;

export default store;

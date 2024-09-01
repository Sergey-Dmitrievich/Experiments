import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { reducer as favoriteReducer,} from "./favorites/fovorites.slice";
import { api } from "./api/api";

const reducers = combineReducers({
  favorites: favoriteReducer,
  [api.reducerPath]: api.reducer

})

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
})
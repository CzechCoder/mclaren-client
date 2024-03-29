import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

// reducers
import authReducer from "../features/auth/authSlice"
import carReducer from "../features/cars/carSlice"
import itemReducer from "../features/items/itemSlice"

export const store = configureStore(
  {
  reducer: {
    auth: authReducer,
    cars: carReducer,
    items: itemReducer,
  },

});

// store types
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type State = ReturnType<typeof store.dispatch>

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../state/store";
import carService from "./carService";

const initialState = {
  cars: [],
  car: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// register car
export const registerCar = createAsyncThunk<{success: boolean}, undefined, {state: RootState}>(
  "cars/register",
  async (carData, thunkAPI) => {
    try {
        const state = thunkAPI.getState()
        const token = state.auth.user.token
        return await carService.registerCar(carData, token)
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// get users cars
export const getCars = createAsyncThunk<{success: boolean}, undefined, {state: RootState}>(
  "cars/getAll",
  async (_, thunkAPI) => {
    try {
        const state = thunkAPI.getState()
        const token = state.auth.user.token
        return await carService.getCars(token)
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const carSlice = createSlice({
  name: "car",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
      builder
      .addCase(registerCar.pending, (state)=> {
          state.isLoading = true
      })
      .addCase(registerCar.fulfilled, (state)=> {
          state.isLoading = false
          state.isSuccess = true
      })
      .addCase(registerCar.rejected, (state, action: PayloadAction<any>)=> {
          state.isLoading = false
          state.isError = true
          state.message = action.payload || "Something went wrong";
      })
      .addCase(getCars.pending, (state)=> {
          state.isLoading = true
      })
      .addCase(getCars.fulfilled, (state, action: PayloadAction<any>)=> {
          state.isLoading = false
          state.isSuccess = true
          state.cars = action.payload
      })
      .addCase(getCars.rejected, (state, action: PayloadAction<any>)=> {
          state.isLoading = false
          state.isError = true
          state.message = action.payload || "Something went wrong";
      })
  },
});

export const { reset } = carSlice.actions;
export default carSlice.reducer;

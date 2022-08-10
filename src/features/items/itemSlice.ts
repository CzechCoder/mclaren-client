import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../state/store";
import itemService from "./itemService";

const initialState = {
  items: [],  
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// add item
export const addItem = createAsyncThunk<{success: boolean}, undefined, {state: RootState}>(
  "items/register",
  async (itemData, thunkAPI) => {
    try {
        const state = thunkAPI.getState()
        const token = state.auth.user.token
        return await itemService.addItem(itemData, token)
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

// get items
export const getItems = createAsyncThunk<{success: boolean}, undefined, {state: RootState}>(
  "items/getAll",
  async (_, thunkAPI) => {
    try {
        const state = thunkAPI.getState()
        const token = state.auth.user.token
        return await itemService.getItems(token)
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

export const itemSlice = createSlice({
  name: "item",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
      builder
      .addCase(addItem.pending, (state)=> {
          state.isLoading = true
      })
      .addCase(addItem.fulfilled, (state)=> {
          state.isLoading = false
          state.isSuccess = true
      })
      .addCase(addItem.rejected, (state, action: PayloadAction<any>)=> {
          state.isLoading = false
          state.isError = true
          state.message = action.payload || "Something went wrong";
      })
      .addCase(getItems.pending, (state)=> {
          state.isLoading = true
      })
      .addCase(getItems.fulfilled, (state, action: PayloadAction<any>)=> {
          state.isLoading = false
          state.isSuccess = true
          state.items = action.payload
      })
      .addCase(getItems.rejected, (state, action: PayloadAction<any>)=> {
          state.isLoading = false
          state.isError = true
          state.message = action.payload || "Something went wrong";
      })
  },
});

export const { reset } = itemSlice.actions;
export default itemSlice.reducer;

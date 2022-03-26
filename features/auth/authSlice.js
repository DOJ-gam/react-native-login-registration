import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// get user from asyncStorage

const initialState = {
  user: null, //if user in storage add user else null
  isError: false,
  isSuccess: false,
  isLoading: false,
  message,
};

// Register User

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // any reducer in here is not gonna be async(thunk function)
    reset: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.message = "";
    },
  },
  extraReducers: () => {
    // async functions here
  },
});

// export the authslice reducer and the authslice actions
export const { reset } = authSlice.actions;
export default authSlice.reducer;

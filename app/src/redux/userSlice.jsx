import { createSlice } from "@reduxjs/toolkit";
import { getUserProfile } from "../utils/api/";

const userSlice = createSlice({
  name: "user",
  initialState: {
    firstName: undefined,
    lastName: undefined,
    isLoading: false,
    isError: false,
  },
  reducers: {
    editFirstName: (state, action) => {
      state.firstName = action.payload;
    },
    editLastName: (state, action) => {
      state.lastName = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUserProfile.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getUserProfile.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.firstName = payload.body.firstName;
      state.lastName = payload.body.lastName;

      console.log(payload.body.firstName);
    });
    builder.addCase(getUserProfile.rejected, (state) => {
      state.isError = true;
    });
  },
});

export default userSlice.reducer;
export const { editFirstName, editLastName, isLoading, isError } =
  userSlice.actions;

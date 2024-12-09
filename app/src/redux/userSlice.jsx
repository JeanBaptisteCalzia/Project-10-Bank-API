import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstName: "Tony",
  lastName: "Jarvis",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    editFirstName: (state, action) => {
      state.firstName = action.payload;
    },
    editLastName: (state, action) => {
      state.lastName = action.payload;
    },
  },
});

export default userSlice.reducer;
export const { editFirstName, editLastName } = userSlice.actions;

import { createSlice } from "@reduxjs/toolkit";

const editFormFieldSlice = createSlice({
  name: "editFormField",
  initialState: {
    note: "",
    category: "",
  },
  reducers: {
    editInputCategory: (state, action) => {
      state.category = action.payload;
    },
    editInputNote: (state, action) => {
      state.note = action.payload;
    },
  },
});

export default editFormFieldSlice.reducer;
export const { editInputCategory, editInputNote, category, note } =
  editFormFieldSlice.actions;

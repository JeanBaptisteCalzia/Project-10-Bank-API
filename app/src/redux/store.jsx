import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import editFormFieldReducer from "./editFormFieldSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    editFormField: editFormFieldReducer,
  },
});

export default store;

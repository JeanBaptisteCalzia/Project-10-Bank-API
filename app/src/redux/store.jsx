import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import editFormFieldSliceReducer from "./editFormFieldSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    editFormFieldSlice: editFormFieldSliceReducer,
  },
});

export default store;

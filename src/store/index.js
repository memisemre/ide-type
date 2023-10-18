import { configureStore } from "@reduxjs/toolkit";
import formTypes from "./formTypes/index.js";
export const stores = configureStore({
  reducer: {
    formTypes: formTypes,
  },
});

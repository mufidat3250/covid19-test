import { configureStore } from "@reduxjs/toolkit";
import fetchData from "./reducer";
export const store = configureStore({
  reducer: {
    result: fetchData,
  },
});

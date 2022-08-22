import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const dataReducer = createSlice({
  name: "dataslice",
  initialState: initialState,
  reducers: {
    fetchData(state, action) {
      console.log(action);
      return action.payload;
    },
  },
});

export const { fetchData } = dataReducer.actions;
export default dataReducer.reducer;

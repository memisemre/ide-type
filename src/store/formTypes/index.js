import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "english",
};

export const formTypes = createSlice({
  name: "formTypes",
  initialState,
  reducers: {
    changeType: (state) => {
      state.value = state.value;
    },
  },
});

export const { changeType } = formTypes.actions;
export default formTypes.reducer;

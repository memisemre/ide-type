import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "randomWords",
};

export const formTypes = createSlice({
  name: "formTypes",
  initialState,
  reducers: {
    changeType: (state) => {
      state.value = "osman";
    },
  },
});

export const { changeType } = formTypes.actions;
export default formTypes.reducer;

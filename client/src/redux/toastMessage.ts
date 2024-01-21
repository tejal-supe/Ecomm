import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";


export interface toastMsg{
  value: boolean;
  message: string;
}
export const initialState: toastMsg = {
  value: false,
  message:"string"
};



export const toastSlice = createSlice({
  name: "toastmessage",
  initialState,
  reducers: {
    showToastMessage: (state, action) => {
       console.log(action,'action')
      state.value = action.payload.value;
      state.message = action.payload.message;
    },
  },
});

export const { showToastMessage } = toastSlice.actions;
export default toastSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

export const itemsSlice = createSlice({
  name: "items",
  initialState: {
    itemsShow: [],
    shopItems: []
  },
  reducers: {

    addItems: (state, { payload }) => {
      state.itemsShow = payload
    },
  },
});

export const { addItems } = itemsSlice.actions;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listProducts: [],
};

function insertAt(array, index, ...elementsArray) {
    array.splice(index, 0, ...elementsArray);
}

const listSlice = createSlice({
  name: "List",
  initialState,
  reducers: {
    addToList(state, action) {
      state.listProducts.push(action.payload);
    },
    replaceToList(state, action) {
        state.listProducts.splice(action.payload.index, 1)
        insertAt(state.listProducts, action.payload.index, action.payload.data);
    },
    removeItem(state, action){
      state.listProducts.splice(action.payload, 1)
    }
  },
});

export const listActions = listSlice.actions;

export default listSlice.reducer;

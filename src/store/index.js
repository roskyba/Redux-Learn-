import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counterSlice";
import themeReducer from "../features/themeSlice";

console.log("counterReducer", counterReducer);
console.log("themeReducer", themeReducer);

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    theme: themeReducer,
  },
});

console.log("store inside store.js", store);

import { configureStore } from "@reduxjs/toolkit";

import themeReducer from "../features/theme/themeSlice";
import tabsReducer from "../features/tabs/tabsSlice";
import userReducer from "../features/users/usersSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    tabs: tabsReducer,
    users: userReducer,
  },
});

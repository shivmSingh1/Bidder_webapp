import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";


const Store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false
    })
  },
  devTools: process.env.NODE_ENV === "development"
})

export default Store;
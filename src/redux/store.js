import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { encryptTransform } from 'redux-persist-transform-encrypt';
 
const persistConfig = {
  key: 'root',
  storage,
  transforms: [
      encryptTransform({
        secretKey:import.meta.env.VITE_PERSIST_SECRET_KEY,
        onError: function (error) {
          console.log("something went wrong while encrypting persist store")
        },
      }),
    ],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const Store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false
    })
  },
  devTools: process.env.NODE_ENV === "development"
})

export const  persistor = persistStore(Store)
export default Store;
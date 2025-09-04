import { combineReducers } from "@reduxjs/toolkit";
import testSlice from "./slices/testSlice";
import authSlice  from "./slices/authSlice";


export const rootReducer = combineReducers({
	test: testSlice,
	auth: authSlice
})
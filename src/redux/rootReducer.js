import { combineReducers } from "@reduxjs/toolkit";
import testSlice from "./slices/testSlice";


export const rootReducer = combineReducers({
	test: testSlice
})
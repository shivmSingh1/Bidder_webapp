import { combineReducers } from "@reduxjs/toolkit";
import testSlice from "./slices/testSlice";
import authSlice  from "./slices/authSlice";
import auctionSlice  from "./slices/auctionSlice";


export const rootReducer = combineReducers({
	test: testSlice,
	auth: authSlice,
	auction: auctionSlice
})
import axios from "axios"

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

const initialState = {
	data: [],
	loading: false,
	error: null
}


export const testFetchData = createAsyncThunk(
	"testFetchData",
	async (_, thunkApi) => {
		try {
			const response = await axios.get("https://dummyjson.com/posts")
			if (response) {
				return response.data
			} else {
				return thunkApi.rejectWithValue(response.error)
			}
		} catch (error) {
			return thunkApi.rejectWithValue(error.message)
		}
	}
)


export const testSlice = createSlice({
	name: "test",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(testFetchData.pending, (state) => {
			state.loading = true
		}).addCase(testFetchData.fulfilled, (state, action) => {
			state.data = action.payload;
			state.loading = false
		}).addCase(testFetchData.rejected, (state, action) => {
			state.data = [];
			state.loading = false;
			state.error = action.payload
		})
	}
})


export default testSlice.reducer
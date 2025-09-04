import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { POST } from "../../services/axiosRequestHandler"

const registerInitialState={
    isLoading:false,
    error:null
}

export const registerUser = createAsyncThunk(
    'auth/register',
    async(payload,thunkApi)=>{
        try {
            const response = await POST('/auth/register',payload)
            if(response){
                return response.data
            }else{
                return thunkApi.rejectWithValue(response.error)
            }
        } catch (error) {
            return thunkApi.rejectWithValue(error.message)
        }
    }
)

export const signInUser = createAsyncThunk(
    "auth/signInUser",
    async(payload,thunkApi)=>{
        try {
            const response = await POST('/auth/login',payload)
            if(response){
                return response.data
            }else{
                return thunkApi.rejectWithValue(response.error)
            }
        } catch (error) {
              return thunkApi.rejectWithValue(error.message)
        }
    }
)

export const authSlice= createSlice({
    name:"auth",
    initialState:registerInitialState,
    reducers:{},
    extraReducers:(builder)=>{
       builder.addCase(registerUser.pending,(state)=>{
            state.isLoading = true
       }).addCase(registerUser.fulfilled,(state)=>{
            state.isLoading = false
       }).addCase(registerUser.rejected,(state,action)=>{
            state.isLoading = false;
            state.error = action.payload
       })
    }
})

export default authSlice.reducer


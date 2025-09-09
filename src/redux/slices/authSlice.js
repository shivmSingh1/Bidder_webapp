import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { GET, POST } from "../../services/axiosRequestHandler"

const registerInitialState={
    isLogin:false,
    isLoading:false,
    error:null,
    isAccountVerified:false
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
                console.log("response",response?.data)
                return response.data
            }else{
                return thunkApi.rejectWithValue(response.error)
            }
        } catch (error) {
        const errorMessage =
        error?.response?.data?.error || // backend error field
        error?.response?.data?.message || // backend message field
        error?.message || // fallback
        "Something went wrong";
          return thunkApi.rejectWithValue(errorMessage);
        }
    }
)

export const forgotPassword = createAsyncThunk(
    'auth/forgotPassword',
    async(payload,thunkApi)=>{
        try {
            const response = await POST("/auth/forgot-password",payload)
            if(response){
                console.log("response",response?.data)
                return response.data
            }else{
                return thunkApi.rejectWithValue(response.error)
            }
        } catch (error) {
              const errorMessage =
        error?.response?.data?.error || // backend error field
        error?.response?.data?.message || // backend message field
        error?.message || // fallback
        "Something went wrong";
          return thunkApi.rejectWithValue(errorMessage);
        }
    }
)

export const verifyAccount = createAsyncThunk(
    'auth/verifyAccount',
    async(param,thunkApi)=>{
        try {
            const response = await GET("/auth/verify-account/",param)
            if(response){
                console.log("response",response?.data)
                return response.data
            }else{
                return thunkApi.rejectWithValue(response.error)
            }
        } catch (error) {
              const errorMessage =
        error?.response?.data?.error || // backend error field
        error?.response?.data?.message || // backend message field
        error?.message || // fallback
        "Something went wrong";
          return thunkApi.rejectWithValue(errorMessage);
        }
    }
)

export const updatePassword = createAsyncThunk(
    'auth/updatePassword',
    async(param,thunkApi)=>{
        try {
            const response = await GET("/auth/update-password/",param)
            if(response){
                console.log("response",response?.data)
                return response.data
            }else{
                return thunkApi.rejectWithValue(response.error)
            }
        } catch (error) {
              const errorMessage =
        error?.response?.data?.error || // backend error field
        error?.response?.data?.message || // backend message field
        error?.message || // fallback
        "Something went wrong";
          return thunkApi.rejectWithValue(errorMessage);
        }
    }
)

export const authSlice= createSlice({
    name:"auth",
    initialState:registerInitialState,
    reducers:{},
    extraReducers:(builder)=>{
       builder
       .addCase(registerUser.pending,(state)=>{
            state.isLoading = true
       }).addCase(registerUser.fulfilled,(state)=>{
            state.isLoading = false
       }).addCase(registerUser.rejected,(state,action)=>{
            state.isLoading = false;
            state.error = action.payload
       })
       .addCase(signInUser.pending,(state)=>{
            state.isLoading = true
       }).addCase(signInUser.fulfilled,(state)=>{
            state.isLoading = false
            state.isLogin = true
       }).addCase(signInUser.rejected,(state,action)=>{
            state.isLoading = false;
            state.isLogin = false;
            state.error = action.payload
       })
       .addCase(forgotPassword.pending,(state)=>{
            state.isLoading = true
       }).addCase(forgotPassword.fulfilled,(state)=>{
            state.isLoading = false
            state.isLogin = true
       }).addCase(forgotPassword.rejected,(state,action)=>{
            state.isLoading = false;
            state.isLogin = false;
            state.error = action.payload
       })
       .addCase(verifyAccount.pending,(state)=>{
            state.isLoading = true
       }).addCase(verifyAccount.fulfilled,(state)=>{
            state.isLoading = false
            state.isAccountVerified = true
       }).addCase(verifyAccount.rejected,(state,action)=>{
            state.isLoading = false;
            state.error = action.payload
       })
    }
})

export default authSlice.reducer


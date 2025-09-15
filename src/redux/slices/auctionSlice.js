import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { GET } from "../../services/axiosRequestHandler"

const initialAuctionValues={
    isLoading:false,
    error:null,
    homeAuctionList:[]
}

export const getHomeAuctionList = createAsyncThunk(
    'auction/HomeAuction',
     async (_,thunkApi)=>{
       try {
        const response = await GET("/auction?page=1&limit=8")
                    if (response) {
                        // console.log("response", response?.response?.data?.data?.auctions)
                        return response?.response?.data?.data?.auctions
                    } else {
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

export const auctionSlice = createSlice({
    name:"auction",
    initialState:initialAuctionValues,
    reducers:{},
    extraReducers: (builder) => {
        builder
            .addCase(getHomeAuctionList.pending, (state) => {
                state.isLoading = true
            }).addCase(getHomeAuctionList.fulfilled, (state,action) => {
                state.isLoading = false
                console.log("action payload",action.payload)
                state.homeAuctionList = action.payload || []
            }).addCase(getHomeAuctionList.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload
            })
    }
})


export default auctionSlice.reducer
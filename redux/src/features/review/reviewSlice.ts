import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getAllMovie} from "../movie/movieApi";
import {getAllReviewsByMovieId} from "./reviewApi";
import {apiDeleteMovie, apiGetAllMovie, apiSaveMovie, apiUpdateMovie} from "../movie/movieSlice";
import {RootState} from "../../app/store";
export interface Review {
    _id?:string,
    movie:string,
    rating:number,
    review:string,
}
export interface ReviewList {
    items: Array<Review>
}
const initialState: ReviewList = {
    items:[]
}
export const apiGetAllReview = createAsyncThunk(
    'reviews/getAllReview',
    async (movieId:string) => {
        console.log("API get all review");
        const response = await getAllReviewsByMovieId(movieId);
        console.log("All review json ",response.data);
        return response.data;
    }
);
export const reviewSlice = createSlice({
    name :"reviews",
    initialState,
    reducers:{
    },
    extraReducers: (builder) => {
        builder
            .addCase(apiGetAllReview.fulfilled, (state, action)=> {
                console.log("Api get all review fulfilled ",action.payload);
                state.items = action.payload;

            })
    },
});
export const selectReview = (state: RootState) => state.review.items;
export default reviewSlice.reducer;
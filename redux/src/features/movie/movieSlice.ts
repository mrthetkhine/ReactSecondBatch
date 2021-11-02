import {ToDoItem, ToDoList, todoSlice} from "../todo/todoSlice";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../../app/store";
import {fetchToDo} from "../todo/todoAPI";
import {deleteMovie, getAllMovie, saveMovie, updateMovie} from "./movieApi";
import {incrementAsync} from "../counter/counterSlice";

export interface Director {
    name:string,
    phoneNo:string,
}
export interface Movie {
    _id?:string;
    title:string;
    director: Director,
    year:number,
}
export interface MovieList {
    items: Array<Movie>
}
export const apiGetAllMovie = createAsyncThunk(
    'movies/getAllMovie',
    async () => {
        console.log("API get all movie");
        const response = await getAllMovie();
        // The value we return becomes the `fulfilled` action payload
        //console.log("API get all movie response ",response);

        console.log("All movie json ",response.data);
        return response.data;
    }
);
export const apiSaveMovie = createAsyncThunk(
    'movies/saveMovie',
    async (movie:Movie) => {
        console.log("API save movie");
        const response = await saveMovie(movie);
        // The value we return becomes the `fulfilled` action payload
        //console.log("API get all movie response ",response);

        console.log("Save movie json ",response.data);
        return response.data;
    }
);
export const apiDeleteMovie = createAsyncThunk(
    'movies/deleteMovie',
    async (movie:Movie) => {
        console.log("API delete movie=>");
        const response = await deleteMovie(movie);
        // The value we return becomes the `fulfilled` action payload
        //console.log("API get all movie response ",response);

        console.log("Delete movie json ",response.data);
        return movie;
    }
);
export const apiUpdateMovie = createAsyncThunk(
    'movies/updateMovie',
    async (movie:Movie) => {
        console.log("API update movie=>");
        const response = await updateMovie(movie);
        // The value we return becomes the `fulfilled` action payload
        //console.log("API get all movie response ",response);

        console.log("Update movie json ",response.data);
        return response.data.movie;
    }
);
const initialState:MovieList = {
    items: [
       /* {
            id:"1",
            title: "Matrix",
            year:1995,
            director:{
                name:"Jame Cameron",
                phoneNo:"0911991"
            }
        },
        {
            id:"2",
            title: "Interstellar",
            year:2014,
            director:{
                name:"Christopher Nolan",
                phoneNo:"0911991"
            }
        },*/
    ]
}
export const movieSlice = createSlice({
    name :"movies",
    initialState,
    reducers:{
        loadAllMovie:(state, action: PayloadAction<Array<Movie>>) =>{
            console.log("Payload ",action);
            state.items= action.payload;
        },
        addMovie:(state, action: PayloadAction<Movie>) =>{
            console.log("Payload ",action);
            state.items.push(action.payload);
        },

    },
    extraReducers: (builder) => {
        builder
            .addCase(apiGetAllMovie.fulfilled, (state, action)=> {
                console.log("Api fullfilled ",action.payload);
                state.items = action.payload;

            })
            .addCase(apiSaveMovie.fulfilled, (state, action)=> {
                console.log("Api fullfilled ",action.payload);
                state.items.push(action.payload);

            })
            .addCase(apiDeleteMovie.fulfilled, (state, action)=> {
                console.log("Api delete fullfilled ",action.payload);
                state.items = state.items.filter(movie=>movie._id!=action.payload._id);

            })
            .addCase(apiUpdateMovie.fulfilled, (state, action)=> {
                console.log("Api update fullfilled ",action.payload);
                state.items = state.items.map(movie=>movie._id==action.payload._id?action.payload:movie);

            })

    },
});
export const {addMovie} = movieSlice.actions;
export const selectMovie = (state: RootState) => state.movies.items;

export default movieSlice.reducer;
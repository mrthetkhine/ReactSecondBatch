import {ToDoItem, ToDoList, todoSlice} from "../todo/todoSlice";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../../app/store";
import {fetchToDo} from "../todo/todoAPI";
import {getAllMovie, saveMovie} from "./movieApi";
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

    },
});
export const {addMovie} = movieSlice.actions;
export const selectMovie = (state: RootState) => state.movies.items;

export default movieSlice.reducer;
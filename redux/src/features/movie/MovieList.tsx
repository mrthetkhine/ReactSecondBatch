import  { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
    selectMovie
} from './movieSlice';
import {selectTodo} from "../todo/todoSlice";
import MovieUi from "./MovieUi";
import NewMovieDialog from "./NewMovieDialog";

export default function MovieList()
{
    const movies = useAppSelector(selectMovie);
    return(<div>

        <NewMovieDialog/>
        {movies.map(movie=> <MovieUi
            key={movie.id}
            movie={movie}/>)}
    </div>)
}
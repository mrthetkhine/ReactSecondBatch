import {useEffect, useState} from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
    apiGetAllMovie,
    selectMovie
} from './movieSlice';
import {selectTodo} from "../todo/todoSlice";
import MovieUi from "./MovieUi";
import NewMovieDialog from "./NewMovieDialog";

export default function MovieList()
{
    const dispatch = useAppDispatch();

    useEffect(()=>{
        dispatch(apiGetAllMovie());
    },[]);

    const movies = useAppSelector(selectMovie);
    return(<div>

        <NewMovieDialog/>
        {
            movies.map(movie=> <MovieUi
                    key={movie._id}
                    movie={movie}/>)
        }
    </div>)
}
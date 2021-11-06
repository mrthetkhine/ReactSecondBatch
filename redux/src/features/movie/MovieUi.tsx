import styles from './Movie.module.css';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { useNavigate } from "react-router-dom";

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

import {apiDeleteMovie, apiSaveMovie, Movie} from './movieSlice';
import NewOrUpdateMovieDialog from "./NewOrUpdateMovieDialog";
const MySwal = withReactContent(Swal);


export default function MovieUi(props:any) {

    let dispatch = useAppDispatch();
    let movie:Movie = props.movie;
    let navigate = useNavigate();

    console.log("Movie ",movie);
    //console.log("Api delete movie ",apiDeleteMovie);
    let deleteHandler = ()=>{

        MySwal.fire({
            title: <p>Are you sure you want to delete?</p>,
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',

        }).then((result) => {
           if(result.isConfirmed)
           {
               console.log("Delete handler ",movie);
               dispatch(apiDeleteMovie(movie));
               console.log("After api Delete called");
           }
        })
    };
    let detailHandler = ()=>{
        console.log("Go to movie detail");
        navigate(`/movie-detail/${movie._id}`);
    };
    return (<div

            className={styles.movie}>
            <div className={styles.movieTitle}>{movie.title}</div>
            <div >{movie.year}</div>
            <div >Director : {movie.director.name}</div>
            <button type="button"
                    className="btn btn-danger"
                    onClick={deleteHandler}>
                Delete
            </button>
            <NewOrUpdateMovieDialog movie={movie}/>
            <button type="button"
                    className="btn btn-primary"
                    onClick={detailHandler}>
            Details
            </button>
    </div>);

}
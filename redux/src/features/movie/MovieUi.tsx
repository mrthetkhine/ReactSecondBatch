import styles from './Movie.module.css';
import {Movie} from './movieSlice';

export default function MovieUi(props:any) {

    let movie:Movie = props.movie;
    console.log("Movie ",movie);
    return (<div
        className={styles.movie}>
            <div className={styles.movieTitle}>{movie.title}</div>
            <div >{movie.year}</div>
            <div >Director : {movie.director.name}</div>
    </div>);

}
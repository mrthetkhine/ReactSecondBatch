import styles from './Movie.module.css';
import {Movie} from './movieSlice';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal);

export default function MovieUi(props:any) {

    let movie:Movie = props.movie;
    console.log("Movie ",movie);
    let deleteHandler = ()=>{
        console.log("Delete handler");
        MySwal.fire({
            title: <p>Are you sure you want to delete?</p>,
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',

        }).then((result) => {
           if(result.isConfirmed)
           {
               alert("Clicked confirmed");
           }
        })
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
    </div>);

}
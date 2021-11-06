import { useParams } from "react-router-dom";
import {selectMovie, selectMovieById} from "../features/movie/movieSlice";
import {useAppDispatch, useAppSelector} from "../app/hooks";
import {useEffect} from "react";
import {apiGetAllReview,selectReview} from "../features/review/reviewSlice";
import ReviewUI from "../features/review/ReviewUI";

export default function MovieDetailPage(props:any)
{
    let { movieId } = useParams();
    const dispatch = useAppDispatch();
    const movie = useAppSelector(state=>selectMovieById(state,movieId!));
    const reviews = useAppSelector(selectReview);

    useEffect(()=>{
        console.log("API call Movie id ",movieId);
        dispatch(apiGetAllReview(movieId!));
    },[]);

    console.log("Movie ",movie);
    return (<div>

        <div>
            Title: {movie.title}
        </div>
        <div>
            Director: {movie.director.name}
        </div>
        <div>
            Year: {movie.year}
        </div>
        <div>
            {
                reviews.map(review=> <ReviewUI
                    key={review._id}
                    review={review}/>)
            }
        </div>
    </div>)
}
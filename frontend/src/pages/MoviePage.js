import {useParams} from "react-router-dom";

export default function MoviePage(){
    let {id} = useParams();
    return <div>
        Movie Page  <h1>Movie Id {id}</h1>
    </div>
}
import {
    useParams
} from "react-router-dom";

export default function HomePage(){
    let {id} = useParams();
    return <div>
        Home Page url {id}

    </div>
}
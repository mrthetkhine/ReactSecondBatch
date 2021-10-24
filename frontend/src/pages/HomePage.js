import {
    useParams,
    useLocation,
} from "react-router-dom";

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

export default function HomePage(){
    let {id} = useParams();
    let query = useQuery();
    return <div>
        Home Page url {id}
        Query parameter {query.get("name")}
    </div>
}
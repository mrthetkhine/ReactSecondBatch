import {useParams} from "react-router-dom";

export default function AboutPage(){
    let {id} = useParams();
    console.log("Id ",id);
    return <div>
        About Page url=>  {id}
    </div>
}
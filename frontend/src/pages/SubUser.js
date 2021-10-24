import {
    useParams
} from "react-router-dom";
export default function SubUser() {
    // The <Route> that rendered this component has a
    // path of `/topics/:topicId`. The `:topicId` portion
    // of the URL indicates a placeholder that we can
    // get from `useParams()`.
    let { userName } = useParams();

    return (
        <div>
            <h3>{userName}</h3>
        </div>
    );
}
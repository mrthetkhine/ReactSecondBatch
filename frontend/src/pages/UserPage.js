import {
    Link,
    useRouteMatch,
    Switch,
    Route,
} from "react-router-dom";
import SubUser from "./SubUser";
export default function UserPage(){
    let { path, url } = useRouteMatch();
    return <div>
        User Page
        <ul>
            <li>
                <Link to={`${url}/admin`}>Admin</Link>
            </li>
            <li>
                <Link to={`${url}/user`}>User</Link>
            </li>

        </ul>
        <Switch>
            <Route exact path={path}>
                <h3>Please select a topic.</h3>
            </Route>
            <Route path={`${path}/:userName`}>
               <SubUser/>
            </Route>
        </Switch>

    </div>
}
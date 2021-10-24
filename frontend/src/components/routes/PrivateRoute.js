import {
    Link,
    useRouteMatch,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import auth from "../../pages/auth";
export default function PrivateRoute({ children,auth, ...rest }) {

    return (
        <Route
            {...rest}
            render={({ location }) =>
                auth ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
}
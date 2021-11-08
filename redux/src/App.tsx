import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {useAuthentication} from "./services/authService";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link
} from "react-router-dom";
import TodoListUI from "./features/todo/TodoListUI";
import MovieList from "./features/movie/MovieList";
import MovieDetailPage from "./pages/MovieDetailPage";
import LoginPage from "./pages/LoginPage";
import PrivateRoute from "./components/routes/PrivateRoute";
import HomePage from "./pages/HomePage";
import LogoutPage from "./pages/LogoutPage";

function App() {

  return (
    <div className="App">

        <Router>
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">


                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link" to="/login?redirectTo=/">Login</Link>
                            </li>
                            {
                                useAuthentication()
                                && <li className="nav-item">
                                    <Link className="nav-link" to="/movie-list">Movie List</Link>
                                    </li>
                            }

                            {useAuthentication() && <li className="nav-item">
                                <Link className="nav-link" to="/logout">Logout</Link>
                            </li>}


                        </ul>

                    </div>
                </nav>

                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Routes>
                    <Route path="/" element={<HomePage/>}>

                    </Route>
                    <Route path="/login" element={<LoginPage/>}>

                    </Route>
                    <Route path="/movie-list" element={
                        <PrivateRoute
                        redirectTo={"/login?redirectTo=/movie-list"}
                        isAuth={useAuthentication()}>
                        <MovieList />
                    </PrivateRoute>}>

                    </Route>

                    <Route
                        path="/movie-detail/:movieId"
                        element={
                            <PrivateRoute
                                redirectTo={"/login?redirectTo=/movie-detail/:movieId"}
                                isAuth={useAuthentication()}>
                                <MovieDetailPage />
                            </PrivateRoute>
                        }
                    />
                    <Route path="/logout" element={<LogoutPage/>}>

                    </Route>



                </Routes>
            </div>
        </Router>
     {/* <Counter />*/}
   {/*  <TodoListUI/>*/}

    </div>
  );
}

export default App;

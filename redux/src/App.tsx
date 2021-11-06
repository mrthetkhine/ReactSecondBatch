import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link
} from "react-router-dom";
import TodoListUI from "./features/todo/TodoListUI";
import MovieList from "./features/movie/MovieList";
import MovieDetailPage from "./pages/MovieDetailPage";

function App() {
  return (
    <div className="App">
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/movie-detail">Movie Detail</Link>
                        </li>

                    </ul>
                </nav>

                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Routes>
                    <Route path="/" element={<MovieList/>}>

                    </Route>
                    <Route path="/movie-detail/:movieId" element={<MovieDetailPage />}>

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

import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import TodoListUI from "./features/todo/TodoListUI";

function App() {
  return (
    <div className="App">
     {/* <Counter />*/}
     <TodoListUI/>
    </div>
  );
}

export default App;

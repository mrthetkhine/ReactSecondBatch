
import  { useState } from 'react';


import {
    selectTodo,
    ToDoItem,
    addTodo,
    removeTodo,
    updateTodo,
    getToDoByAPI,
} from './todoSlice';
import { useAppSelector, useAppDispatch } from '../../app/hooks';

let id = 2;
function uuid():number{
    id ++;
    return id;
}
export default function TodoListUI() {
    const todos = useAppSelector(selectTodo);
    const dispatch = useAppDispatch();
    const [newItem,setItem] = useState("");
    console.log("Todos ",todos);

    let addToDoHandler = ()=>{
        console.log("Add Todo ",newItem);
        let item ={
            id:uuid(),
            text:newItem
        }
        dispatch(addTodo(item));
        setItem("");
    }
    let addFromAPI = ()=>{

        dispatch(getToDoByAPI(uuid()));
        setItem("");
    }
    let removeHandler = (toDoItem:ToDoItem)=>{
        console.log("ToDo Item Remove ",toDoItem);
        dispatch(removeTodo(toDoItem));
    };
    let updateHandler = (item:ToDoItem)=>{

        let updateItem = {...item, text: newItem};
        console.log("update handler ",updateItem);
        dispatch(updateTodo(updateItem));
        setItem("");
    }
    return(
        <div>
            <h1>To Do List</h1>
            <form>
                <div className="row">
                    <div className="col-sm-6">
                        <input type="text"
                               className="form-control col-sm-4"
                               value ={newItem}
                               onChange={(e)=>setItem(e.target.value)}
                        />
                    </div>

                    <button type="button"
                            className="btn btn-primary col-sm-1"
                            onClick={addToDoHandler}
                    >
                        Add
                    </button>
                    <button type="button"
                            className="btn btn-primary col-sm-1"
                            onClick={addFromAPI}
                    >
                        Add from API
                    </button>

                </div>
            </form>
            <div>
                {
                    todos.map((item)=>
                        <div className="form-row" key={item.id}>
                        {item.text}

                        <button type="button"
                                className="btn btn-primary"
                                onClick={()=>removeHandler(item)}>
                            Remove
                        </button>
                            <button type="button"
                                    className="btn btn-primary col-sm-1"
                                    onClick={()=>updateHandler(item)}
                            >
                                Update
                            </button>
                    </div>)
                }
            </div>

        </div>
    )
}
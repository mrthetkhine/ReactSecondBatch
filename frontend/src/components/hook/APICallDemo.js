import React,{useState,useEffect} from "react";
function useApiCall(setTodo) {
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(json => {
                setTodo(json);
                console.log("JSON ", json)
            });
    }, [])
}
function APICallDemo()
{
    let [todo,setTodo] = useState({});
    useApiCall(setTodo);
    return(
        <div>
            {todo.title}
        </div>
    );
}
export default APICallDemo;
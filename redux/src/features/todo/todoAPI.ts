export function fetchToDo(id:number) {
    return fetch('https://jsonplaceholder.typicode.com/todos/'+id);
}

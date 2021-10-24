function addToDo(item)
{
    return {
        type:'ADD_TO_DO',
        payload: item
    }
}
console.log(addToDo({text:"Hello",id:1}));
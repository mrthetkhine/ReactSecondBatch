import React, {useReducer, useState} from "react";

let initialState = {
    items: [
        {id: 1, text: "One"},
        {id:2, text:"Two "},
        {id:3,text:"Three"}
        ],
};
function reducer(state,action)
{
    switch (action.type) {
        case 'ADD_TO_DO':
            return {
                ...state,
                items : [...state.items, action.payload]
            }
        default:
            throw new Error("invalid action type ",action.type)
    }
    return state;
}
export default function ToDoRedux() {
    let [state,dispatch] = useReducer(reducer,initialState);
    let [newItem,setNewItem] = useState('')
    console.log('New Item ',newItem);

    let addHandler = ()=>{
        console.log("Add ",newItem);
        let addAction = {
            type: 'ADD_TO_DO',
            payload: {
                text:newItem
            }
        };
        dispatch(addAction);
        setNewItem("");

    };
    return(<div>
        <div>
            <input type="text"
                   value={newItem}
                   onChange={(e)=>setNewItem(e.target.value)}
                   className="form control"/>
            <button type="button"
                    className="btn btn-primary"
                    onClick={addHandler}>
                Add
            </button>
        </div>
        {
            state.items.map(item=><div>{item.text}</div>)
        }
    </div>)
}
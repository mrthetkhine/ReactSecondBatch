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
        case 'DELETE_TO_DO':
            return {
                ...state,
                items : state.items.filter(item=>item.id!= action.payload.id)
            }
        case 'UPDATE_TO_DO':
            return {
                ...state,
                items : state.items.map(item=>item.id== action.payload.id?
                                            {
                                                ...item,
                                                text:action.payload.text
                                            }
                                            :item)
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
    let deleteHandler= (item)=>{
        console.log("delete handler ",item);
        let deleteAction = {
            type: 'DELETE_TO_DO',
            payload: item
        };
        dispatch(deleteAction);
    }
    let updateHandler = (item)=>{

        let payload = {...item};
        payload.text = newItem;
        console.log("update handler ",payload);

        let updateAction = {
            type: 'UPDATE_TO_DO',
            payload
        };
        dispatch(updateAction);
        setNewItem("");
    };
    return(<div>
        <div>
            <input type="text"
                   value={newItem}
                   onChange={(e)=>setNewItem(e.target.value)}
                   className="form control col-sm-6"/>
            <button type="button"
                    className="btn btn-primary col-sm-1"
                    onClick={addHandler}>
                Add
            </button>
        </div>
        {
            state.items.map(item=>
                <div className="row">
                    <div className="col-sm-6">
                        {item.text}
                    </div>

                    <button type="button"
                            className="btn btn-primary col-sm-1"
                            onClick={()=>deleteHandler(item)}>
                        Delete
                    </button>
                    <button type="button"
                            className="btn btn-primary col-sm-1"
                            onClick={()=>updateHandler(item)}>
                        Update
                    </button>
                </div>
            )
        }
    </div>)
}
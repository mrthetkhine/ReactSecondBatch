import React, {useReducer, useState} from "react";

let initialState = {
    items: ["One","Two ","Three"],
    count : 0
};
function reducer(state,action)
{
    console.log('reducer state ',state, ' action ',action);
    switch (action.type) {
        case 'increment':
            //state.count = state.count+1
            //console.log("Increment");
            return {
                ...state,
                count : state.count +1
            };
        case 'decrement':
            //console.log("Decrement");
            return {
                ...state,
                count : state.count -1
            };
        default:
            throw new Error("Unknown action type");
    }
}
export function ReduxCounter() {

    let [state,dispatch] = useReducer(reducer,initialState);

    return (<div>
        <h1>{state.count}</h1>
        {
            state.items.join(" ")
        }
        <br/>
        <button type="button"
                className="btn btn-primary"
                onClick={()=>{dispatch({
                    type: 'increment'
                })}}>
            Inc
        </button>
        <button type="button"
                className="btn btn-primary"
                onClick={()=>{dispatch({
                    type: 'decrement'
                })}}>
            Dec
        </button>
    </div>)
}
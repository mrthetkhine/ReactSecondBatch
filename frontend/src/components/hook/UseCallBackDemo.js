import React, {useCallback, useState,useMemo} from "react";

function expensiveFunc(a)
{
    console.log("Compute on a");
    return a;
}
export default function UseCallBackDemo()
{
    let [counter,setCounter] = useState(0);
    let [anotherState,setState] = useState({});
    let memonizedCallBack = useCallback(()=>{
        doSomething();
    },[counter])
    let data = counter;
    let doSomething = ()=>{
        console.log("Do something "+data);

    };
    const memoizedValue = useMemo(() => expensiveFunc(counter), [counter]);
    console.log("Memoized value ",memoizedValue);
    return (<div>

        <h1>Use callback counter {counter}</h1>

        <button type="button"
                className="btn btn-primary"
                onClick={()=>setCounter(counter+1)}
                >
            Inc
        </button>
        <button type="button"
                className="btn btn-primary"
                onClick={memonizedCallBack}
        >
            Callback
        </button>
        <button type="button"
                className="btn btn-primary"
                onClick={()=>setState({})}
        >
            Set Other State
        </button>
    </div>)
}
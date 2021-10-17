import React,{useState,useEffect} from "react";


function HookCounter() {
    const [counter,setCounter] = useState(0);
    const [words,setWords] = useState(['One'])

    useEffect(() => {
        console.log("Execute effect");
        // Update the document title using the browser API
        document.title = `You clicked ${counter} times`;
    },[counter]);
    return(<div>
            <h1>words {words.join(' ')} </h1>
            <h1>Counter {counter} </h1>
            <button type="button"
                    className="btn btn-primary"
                    onClick={()=>setCounter(counter+1)}
            >Inc</button>
            <button type="button"
                    className="btn btn-primary"
                    onClick={()=>setWords(words.concat('Two'))}
            >Add Word</button>
        </div>

    )
}
export default HookCounter;
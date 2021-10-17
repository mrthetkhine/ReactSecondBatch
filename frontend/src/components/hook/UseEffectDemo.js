import React,{useState,useEffect} from "react";

function UseEffectDemo() {

    let [counter,setCounter] = useState(0);
    useEffect(()=>{
        console.log("API call code");

        let timer = setInterval(()=>{
            console.log("Set interval");
            setCounter(counter +1);
        },1000);

        return ()=>{
            console.log("Cleanup code");
            clearTimeout(timer);
        }
    },[])
    return(<div>
        UseEffect Clean up Demo {counter}
    </div>)
}
export default UseEffectDemo;
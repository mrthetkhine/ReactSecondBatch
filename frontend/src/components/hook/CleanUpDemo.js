import React, {useEffect, useState} from "react";
import UseEffectDemo from "./UseEffectDemo";
function CleanUpDemo()
{
    let [destroy,setDestroy] = useState(false);


    return (<div>
        {!destroy && <UseEffectDemo/>}
        <button type="button"
                className="btn btn-primary"
                onClick={()=>setDestroy(true)}
        >Remove</button>
    </div>)
}
export default CleanUpDemo;
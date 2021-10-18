import React,{useContext} from "react";
import {DataContext} from "./DataContext";
export default function Level2Child2()
{
    const value = useContext(DataContext);
    return (
        <div>
            Level 2 Child 2
            {
                value.map((val,index)=>
                    <div key={index}>{val}</div>
                )
            }
        </div>
    );
}
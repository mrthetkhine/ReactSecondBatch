import React from "react";
const Mapper=(props)=>{
    let data = props.data;
    let Element = props.element;
    console.log("Element ",Element);
    let list = data.map(ele=><Element {...props}/>);
    console.log("List ",list);
    return (
        <>
        {
            data.map(ele=><Element {...props}/>)
    }
    </>
    );
}
export const ChildElement=(props)=>{
    return (
        <div>
            Data
        </div>
    );
}
export default Mapper;
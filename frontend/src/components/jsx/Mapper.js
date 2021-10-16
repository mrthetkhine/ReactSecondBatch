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
            data.map(ele=><Element {...props} item={ele}/>)
    }
    </>
    );
}
export const ChildElement=(props)=>{
    console.log("Item ",props.item);
    return (
        <div>
            {props.item.text}
        </div>
    );
}
export default Mapper;
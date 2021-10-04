import React from "react";

let Child=()=>{
    return(
        <div>
            This is child
        </div>
    );
}
class ClassComp extends React.Component
{
    render() {
        return (<div>
            <h3>ClassComponent</h3>
            <Child/>
        </div>)
    }
}
export default ClassComp;
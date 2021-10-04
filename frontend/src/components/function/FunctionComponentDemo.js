import React from "react";

let User=()=>(
    <h3>User</h3>
);
let Admin=()=>(
    <h3>Admin</h3>
);
let Child=()=>(<h3>
    This is child in ES6 Arrow Function
</h3>);
function FunctionComponent(){
    console.log("Functional component render");
    let role = 'user'
    let CurrentUser = role==  'user'?User : Admin;
    return (
        <div>
            Here is functional component
            <Child/>
            <CurrentUser/>
        </div>
    );

}
export default FunctionComponent;
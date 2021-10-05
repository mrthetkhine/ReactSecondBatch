import React from "react";

let Admin=()=>{
    return (<div>

        <h1> Admin</h1>
    </div>);
}
let User=()=>{
    return (<div>

        <h1> User</h1>
    </div>);
}
let DashBoard =()=>{
    return null;
}
class ConditionalRendering extends React.Component
{

    render() {
        let isAdmin = false;
        return (
            <div>
                <DashBoard/>
            {/*   { isAdmin && <Admin/>}*/}
                {
                    isAdmin?<Admin/>:<User/>
                }

            </div>
        );
    }
}
export default ConditionalRendering;
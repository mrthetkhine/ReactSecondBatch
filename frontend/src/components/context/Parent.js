import React from "react";
import Level1Child from "./Level1Child";
import Level2Child from "./Level2Child";

export default class Parent extends React.Component{
    render() {
        return (
            <div>
                Parent Component
               {/* <Level1Child/>*/}
               <Level2Child/>
            </div>
        );
    }
}
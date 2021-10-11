import React from "react";
import Level1Child from "./Level1Child";

export default class Parent extends React.Component{
    render() {
        return (
            <div>
                Parent Component
                <Level1Child/>
            </div>
        );
    }
}
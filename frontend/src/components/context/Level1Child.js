import React from "react";
import Level2Child from "./Level2Child";

export default class Level1Child extends React.Component{
    render() {
        return (
            <div>
                Level 1 Component
                <Level2Child/>
            </div>
        );
    }
}
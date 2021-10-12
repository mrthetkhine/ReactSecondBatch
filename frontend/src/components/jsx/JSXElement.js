import React from "react";
export default class JSXElement extends React.Component
{
    render() {
        //<h1>Hello</h1>
        let element = React.createElement("h1",null,"Hello")
        return element;
    }
}
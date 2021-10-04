import React from "react";

function toUpper(msg){
    return msg.toUpperCase();
}
function footer() {
    return <div className="gray-header">
        footer
    </div>
}
function Hello() {
    let name = "<h1> TK </h1>";
    let data = true;

    const element = React.createElement(
        'h1',
        {className: 'greeting'},
        'Hello, world!'
    );
    if(data)
    {
        return (
            <div>
                <h1>Hello Component {toUpper(name)}</h1>
                {element}
               {
                   /*
                    footer()

                    */
                }
               {/* <div>Another Comment</div>*/}
            </div>
        );
    }
    else
    {
        return (<div>No data</div>);
    }

}

export default Hello;
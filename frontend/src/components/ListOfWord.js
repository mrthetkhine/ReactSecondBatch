import React from "react";

export default class ListOfWord extends React.PureComponent
{
    constructor(props) {
        super(props);
        this.state = {
            words : ['One']
        };
        this.add = this.add.bind(this);
    }
    add()
    {
        let words = [...this.state.words];
        words.push("Two");
        this.setState({
            words
        })
    }
    render() {
        console.log("Render");
        return <div>
            {this.state.words.join(',')}
            <button type="button"
                    onClick={this.add}
                    className="btn btn-primary">Add</button>
        </div>;
    }
}
import React from "react";

export default class PureCounter extends React.PureComponent
{
    constructor(props) {
        super(props);
        this.state = {
            counter : 0
        };
        this.increment = this.increment.bind(this);
        this.normal = this.normal.bind(this);
    }
    increment()
    {
        this.setState({
            counter: this.state.counter +1
        })
    }
    normal()
    {
        this.setState({
            counter: this.state.counter
        })
    }
    render() {
        console.log("Render ");
        return(<div>
            <h1>{this.state.counter}</h1>
            <button type="button"
                    onClick={this.increment}
                    className="btn btn-primary"
            >
                Inc
            </button>
            <button type="button"
                    onClick={this.normal}
                    className="btn btn-primary"
            >
                Normal
            </button>
        </div>);

    }
}
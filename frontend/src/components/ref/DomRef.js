import React from "react";

export default class DomRef extends React.Component {
    constructor(props) {
        super(props);
        this.textInput = React.createRef();
    }

    focus()
    {
        console.log("Focus ",this.textInput);
        this.textInput.current.focus();
    }
    render() {
        console.log("txt Input ",this.textInput);
        return (
            <div>
                <form>
                    <input type="text"
                           className="form-control"
                           ref={this.textInput}/>
                    <button type="button"
                            className="btn btn-primary"
                            onClick={this.focus.bind(this)}>
                        Focus
                    </button>
                </form>
            </div>
        );
    }
}
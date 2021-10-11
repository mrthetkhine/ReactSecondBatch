import React from "react";
export default class ForwardRef extends React.Component{
    constructor(props) {
        super(props);
        this.childRef = React.createRef();
        this.focusChild = this.focusChild.bind(this);
    }
    focusChild()
    {
        this.childRef.current.focus();
    }
    render() {
        return (<div>
            <ChildElement ref={this.childRef}></ChildElement>
            <button type="button"
                    className="btn btn-primary"
                    onClick={this.focusChild}>Focus child</button>
        </div>);
    }
}
const ChildElement = React.forwardRef(((props, ref) => {
    return (<div>
        <input type="text" ref={ref}
               className="form-control"/>
    </div>);
}));
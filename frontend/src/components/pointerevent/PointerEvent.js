import React from "react";
export default class PointerEvent extends React.Component
{
    constructor(props) {
        super(props);
        this.onClickHandler = this.onClickHandler.bind(this);

        this.state ={
            count :0
        }
    }
    componentDidMount() {
        window.addEventListener("click",(e)=>{
            console.log("Click on window");
        });
    }

    onClickHandler(){
        console.log("Button clicked");
        this.setState({
            count: this.state.count+1
        })

    }
    render() {
        console.log("Render ");
        return (<div>
            <button type="button" onClick={this.onClickHandler}
                className="btn btn-primary">Click Me</button>
        </div>);
    }
}
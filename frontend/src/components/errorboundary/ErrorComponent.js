import React from "react";
export default class ErrorComponent extends React.Component
{
    constructor(props) {
        super(props);
        this.onClickHandler = this.onClickHandler.bind(this);

        this.state ={
            count :0
        }
    }
    componentDidMount() {

    }

    onClickHandler(){
        this.setState({
            count : this.state.count +1
        })

    }
    render() {
        console.log("Render Error component");
        if(this.state.count ==5)
        {
            throw new Error("Created error");
        }
        else
        {
            return (<div>
                <button type="button" onClick={this.onClickHandler}
                        className="btn btn-primary">{this.state.count}</button>
            </div>);
        }


    }
}
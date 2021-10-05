import React from "react";


class TimeDisplay extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            now: new Date()
        }
    }
    shouldComponentUpdate()
    {
        console.log("Should component update");
        return true;
    }
    componentDidMount() {
        console.log("Component did mount Time");
        this.timerId = setInterval(()=>{
            this.setState({
                now: new Date()
            })
        },1000)
    }
    componentWillUnmount() {
        console.log("Component will unmount");
        clearInterval(this.timerId);
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("Component did updated");
    }

    render() {
        console.log("Render Time");
       return(
           <div>
                <h4>{this.state.now.toLocaleTimeString()}</h4>
           </div>
       )
    }
}
export default TimeDisplay;
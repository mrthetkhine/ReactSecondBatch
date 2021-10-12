import React from "react";
export class View1 extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        let mouse = this.props.mouse;
        return <div>
            View 1 The current mouse position is ({mouse.x},{mouse.y})
        </div>
    }
}
export class View2 extends React.Component
{
    constructor(props) {
        super(props);
    }
    render() {
        let mouse = this.props.mouse;
        return <h3>
            View 2 The current mouse position is ({mouse.x},{mouse.y})
        </h3>
    }
}
export default class MouseTracker extends React.Component {
    constructor(props) {
        super(props);
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.state = { x: 0, y: 0 };
    }

    handleMouseMove(event) {
        this.setState({
            x: event.clientX,
            y: event.clientY
        });
    }

    render() {
        //

        return (
            <div style={{ height: '100vh' }} onMouseMove={this.handleMouseMove}>
                <h1>Move the mouse around!</h1>
               {/* <View1 mouse={this.state}/>*/}
                {this.props.view(this.state)}
            </div>
        );
    }
}
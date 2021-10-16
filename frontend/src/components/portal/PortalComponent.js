import React from "react";
import ReactDOM from 'react-dom';
const modalRoot = document.getElementById('portalNode');
export default class PortalComponent extends React.Component
{
    constructor(props) {
        super(props);
        this.el = document.createElement('div');
    }
    componentDidMount() {
        modalRoot.appendChild(this.el);
    }

    componentWillUnmount() {
        modalRoot.removeChild(this.el);
    }

    render() {
        return ReactDOM.createPortal(
            this.props.children,
            this.el
        );
    }
}
export class PortalParent extends React.Component
{
    render() {
        return <PortalComponent>
            Modal Content
        </PortalComponent>
    }
}
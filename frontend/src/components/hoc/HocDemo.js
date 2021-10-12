import React from "react";
import loadingSpinner from "./loadingSpinner";
import Page from "./Page";
let PageWithSpinner = loadingSpinner(Page);
export default class HocDemo extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            loading : true
        }
    }
    componentDidMount() {
        setTimeout(()=>{
            console.log("Loading completed");
            this.setState({
                loading:false
            })
        },3000);
    }

    render() {

        return <PageWithSpinner loading={this.state.loading}/>
    }

}
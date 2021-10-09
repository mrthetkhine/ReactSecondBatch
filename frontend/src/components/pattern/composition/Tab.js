import React from "react";
function TabBody(props)
{

}
class Tab extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            activeTab :0
        }
    }

    render() {
        console.log("header ",this.props.headers);
        let activeChild = this.props.children[this.state.activeTab];
        return(<div>
            <div >
                {
                    this.props.headers.map(header=>{
                        return(<div className="tab-header">
                            {header}
                        </div>)
                    })
                }
            </div>
            <div className="tab-body">
                {activeChild}
            </div>

        </div>);
    }


}
export default Tab;
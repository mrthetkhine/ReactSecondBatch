import React from "react";
const loadingSpinner = (AnotherComponent)=>{
    class ComponentWithSpinner extends React.Component
    {
        constructor(props) {
            super(props);
        }
        render() {
            console.log("Props ",this.props);
            return(<div>
                {
                    this.props.loading? "Page is loading": <AnotherComponent></AnotherComponent>
                }

            </div>);
        };
    }
    return ComponentWithSpinner;
}
export default loadingSpinner;
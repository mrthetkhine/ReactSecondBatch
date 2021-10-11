import React from "react";
import {DataContext} from "./DataContext";

export default class Level2Child extends React.Component{
    render() {
        return (
            <DataContext.Consumer>
                {
                   value => {
                       console.log("Value ",value);
                       return(
                               <div>
                                   Level 2 Component
                                   {
                                       value.map((val,index)=>
                                           <div key={index}>{val}</div>
                                       )
                                   }
                               </div>
                           )

                   }
                }

            </DataContext.Consumer>

        );
    }
}
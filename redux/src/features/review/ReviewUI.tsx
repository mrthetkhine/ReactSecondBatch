import {Review} from "./reviewSlice";
import React from "react";
import { FaStar } from "react-icons/fa";

export default function(props:any)
{
    let review:Review = props.review;
    let ratings = [];
    for(let i=0;i< review.rating;i++)
    {
        ratings.push(<FaStar/>)
    }
    let iconStyles = { color: "yellow", fontSize: "1.5em" };
    return (<div>
        <div>
            {

                ratings.map((rating,index)=><FaStar key={index} style={iconStyles}/>)
            }
            <div> {review.rating}</div>
            <div> {review.review}</div>
        </div>
    </div>)

}
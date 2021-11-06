import {Review} from "./reviewSlice";
import React from "react";
import { FaStar } from "react-icons/fa";

export default function(props:any)
{
    let review:Review = props.review;

    return (<div>
        <div>
            <FaStar/>
            <div>Rating {review.rating}</div>
            <div>Review {review.review}</div>
        </div>
    </div>)

}
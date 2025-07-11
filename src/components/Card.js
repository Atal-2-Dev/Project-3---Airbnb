import React from "react";
import pic from '../images/image 12.png';
import staricon from '../images/Star 1.png'

export default function Card (){
    return(
        <div className="card1">
            <img src={pic} alt="" className="card-pic"/>
            <ul className="card-firstline">
                <li><img src={staricon} alt="" /></li>
                <li className="card-rating">5.0</li>
                <li className="card-country">(6) · USA</li>
            </ul>
            <ul className="card-secondline"><li>Life lessons with Katie Zaferes</li></ul>
            <ul className="card-thirdline">
                <li className="card-thirdline-rate">From $136 </li>
                <li className="card-thirdline-per">/ person</li>
            </ul>
        </div>
    );
}
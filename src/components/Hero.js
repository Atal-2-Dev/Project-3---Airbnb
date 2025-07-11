import React from "react";
import heroimg from '../images/Group 77 - pic for content.png'

export default function Hero(){
    return(
        <section>
            <ul className="hero">
                <li><img src={heroimg} alt="main image" className="hero-img"/></li>
                <li className="hero-title">Online Experiences</li>
                <li className="hero-descp">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</li>
            </ul>
        </section>
    );
}
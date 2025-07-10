import React from 'react';
import logo from '../images/airbnb 1.png'
import '../index.css';

export default function Navbar(){
    return(
        <nav>
            <img src={logo} alt="image thing" className='navbar-img'/>
        </nav>
    );
}
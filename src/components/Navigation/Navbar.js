import React from 'react';
import { Link } from 'react-router-dom';
import person from '../../resources/person.jpeg';
import '../../Styles/Navbar.css';

function Navbar() {
    return (
        <div className="navbar">
            <div className="brand">
                <Link><span>Basha</span>Chai</Link>
            </div>

            <div className="search">
                <div className="field">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                    <input type="text"/>
                </div>
            </div>

            <div className="options">
                <Link>Buy</Link>
                <Link>Rent</Link>
                <div className="user">
                    <img src={person} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Navbar

import React, { useState } from 'react';
import logo from '../images/logo2.svg';
import { FaAlignRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';



export default function Navbar() { 
    const [isOpen, setOpen] = useState(false);
    const handleToggle = () => setOpen(!isOpen);
        return (
            <nav className="navbar">
                <div className="nav-center">
                    <div className="nav-header">
                        <Link to="/">
                            <img src={logo} alt="Beauty Art"/>
                        </Link>
                        <button type="button" className="nav-btn"
                            onClick={handleToggle}>
                            <FaAlignRight className="nav-icon" />
                        </button>
                    </div>
                    <ul className={isOpen?
                        "nav-links show-nav" : "nav-links"}
                    >
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/pricelist">Pricelist</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                        <li>
                            <Link to="/appointment" id="btn-booking">book now</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
}

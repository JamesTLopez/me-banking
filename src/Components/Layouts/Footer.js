import React from 'react'
import {Link} from 'react-router-dom'
function Footer() {
    return (
        <div className="container-fluid bg-dark">
            <nav className="navbar">
                        <a href="/"className="navbar-brand text-white">ME-BANKING</a>
                        <div className="justify-content-end">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link to="/login" className="nav-link text-white ">LOGIN</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
        </div>
    )
}

export default Footer;
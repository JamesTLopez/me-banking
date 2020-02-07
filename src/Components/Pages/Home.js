import React, { Component } from 'react'
import HomePic from '../../Images/bank.jpg'
import {Link} from 'react-router-dom'
export default class Home extends Component {
    render() {
        return (
            <div className="Home" style={{backgroundImage:`url(${HomePic})`}}>
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
                
            </div>
        )
    }
}

import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Login from '../Layouts/login'

export default class Home extends Component {
    render() {
        return (
            <div className="Home" >
                <div className="container-fluid bg-dark">
                    <nav className="navbar">
                        <a href='/' className="navbar-brand text-white">ME-BANKING</a>
                        <div className="d-flex justify-content-end">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link to="/" className="nav-link text-white">Back to Home</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
                <div className="container d-flex justify-content-center align-items-center h-100">
                    <Login/>
                </div>

                
            </div>
        )
    }
}

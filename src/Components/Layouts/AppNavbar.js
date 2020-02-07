import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class AppNavbar extends Component {
    render() {
        return (
           
                <nav className="navbar navbar-expand-md navbar-dark bg-primary">
                  <div className="container">
                      <Link to="/" className="navbar-brand">Client Panel</Link>
                      <button 
                      className="navbar-toggler"
                      type="button"
                      data-toggle="collapse"
                      data-target="#navbarMain"
                      >
                          toggle
                      </button>
                      <div className="collapse navbar-collapse ">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link to="/dashboard" className="nav-link">Dashboard</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/" className="nav-link">Log out</Link>
                            </li>
                        </ul>
                      </div>

                  </div>
                    
                </nav>
                    //   <a className="navbar-brand text-black">ME-BANKING</a>
                    //   <div className="justify-content-end">
                    //       <ul className="navbar-nav">
                    //       <li className="nav-item">
                    //               <Link to="/dashboard" className="nav-link text-black">Dashboard</Link>
                    //           </li>
                    //           <li className="nav-item">
                    //               <Link to="/login" className="nav-link text-black ">LOGIN OUT</Link>
                    //           </li>
                    //       </ul>
                    //   </div>
                   
               
           
        )
    }
}

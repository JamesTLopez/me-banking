import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {compose} from 'redux'
import { connect} from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'

class AppNavbar extends Component {
    state = {
        isAuthenticated:false
    }

    static getDerivedStateFromProps(props,state){
        const {auth} = props

        if(auth.uid){
            return {isAuthenticated:true}
        }else{
            return {isAuthenticated:false}
        }
    }

    onLogout = (e) => {
       e.preventDefault();

       const {firebase} = this.props
       firebase.logout().then(()=>this.props.history.push('/'));
    }
    render() {
        const {isAuthenticated} = this.state
        const {auth} = this.props
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
                            {isAuthenticated ? (
                            <li className="nav-item">
                                <Link to="/" className="nav-link">Log out</Link>
                                <a href="!#" onClick={this.onLogout} className="nav-link"> {auth.email}</a>
                            </li>
                            ):null}
                            
                        </ul>
                      </div>

                  </div>
                    
                </nav>
           
        )
    }
}

export default compose(
    firestoreConnect(), 
    connect((state,props) => ({
        auth:state.firebase.auth
    }))
   )(AppNavbar);
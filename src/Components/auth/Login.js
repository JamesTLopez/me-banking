import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import { firestoreConnect } from 'react-redux-firebase'
import {compose} from 'redux'
import {connect} from 'react-redux'
import {notifyUser} from '../../Actions/notifyActions'
import Alert from '../Layouts/Alert'
import Footer from '../Layouts/Footer'


class Login extends Component {
    state = {
        email:'',
        password:''
    }

    onChange = (e) => {
        this.setState({[e.target.name]:e.target.value})
    }
    onSubmit = (e) => {
        e.preventDefault();

        const {firebase, notifyUser} = this.props
        const {email,password} = this.state;
        
        firebase.login({
            email,
            password
        }).catch(err => notifyUser('Invalid User','error'))
       
    }
    
    render() {
   
        const {message,messageType} = this.props.notify;
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
                <div className="container d-flex justify-content-center mt-5 h-100">
                    <div className="row w-50">
                        <div className="col-lg-12 col-md-12">
                            <div className="card">
                                <div className="card-header">
                                    <h1>Login</h1>
                                </div>
                                <div className="card-body">
                                    {message ? (
                                        <Alert message={message} messageType={messageType}/>
                                    ) : null}
                                    <form onSubmit={this.onSubmit}>
                                                <div className="form-group">
                                                    <label htmlFor="email">Email Address</label>
                                                    <input type="text"
                                                    className="form-control" 
                                                    name="email"
                                                    minLength="2"
                                                    onChange={this.onChange}
                                                    value={this.state.email}
                                                    required/>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="Password">Password</label>
                                                    <input type="password"
                                                    className="form-control" 
                                                    name="password"
                                                    minLength="2"
                                                    onChange={this.onChange}
                                                    value={this.state.password}
                                                    required/>
                                                </div>
                                                <input type="submit" value="Submit" className="btn btn-primary btn-block"></input>
                                    </form>
                                </div>
                             </div>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <Footer/>
                </div>
            </div>
        )
    }
}

Login.propTypes = {
    firebase:PropTypes.object.isRequired
}


export default compose(
    firestoreConnect(),
    connect((state,props) => ({
        notify:state.notifyReducer
    }),{notifyUser})
)(Login);

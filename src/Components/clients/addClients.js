import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import AppNavbar from '../Layouts/AppNavbar';
import { firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux'
import { connect} from 'react-redux'
import PropTypes from 'prop-types';


class addClients extends Component {

    state = {
        firstName:'',
        lastName:'',
        email:'',
        phone:'',
        balance:''
    }

    onChange = (e) => {
        this.setState({[e.target.name]:e.target.value})
    }

    onSubmit = (e) => {
        e.preventDefault();

        const {firestore} = this.props;

        const newClient = this.state;

        if(newClient.balance ===''){
            newClient.balance = 0;
        }

        firestore.add({collection:'clients'},newClient).then(()=>this.props.history.push('/dashboard'))
        
    }


    render() {
        const { disableBalanceOnAdd } = this.props.settingsReducer
        return (

            <div className="addClients-page">
                <AppNavbar/>
                <div className="container pt-5">
                    <div className="row">
                        <Link to="/dashboard" className="btn btn-link">
                            Back to dashboard
                        </Link>
                    </div>
                        <div className="card">
                            <div className="card-header">
                                Add Client
                            </div>
                            <div className="card-body">
                                <form onSubmit={this.onSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="firstName">First Name</label>
                                        <input type="text"
                                        className="form-control" 
                                        name="firstName"
                                        minLength="2"
                                        onChange={this.onChange}
                                        value={this.state.firstName}
                                        required/>
                                        
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="lastName">Last Name</label>
                                        <input type="text"
                                        className="form-control" 
                                        name="lastName"
                                        minLength="2"
                                        onChange={this.onChange}
                                        value={this.state.lastName}
                                        required/>

                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email </label>
                                        <input type="text"
                                        className="form-control" 
                                        name="email"
                                        minLength="2"
                                        onChange={this.onChange}
                                        value={this.state.email}
                                        required/>

                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="phone">Phone</label>
                                        <input type="text"
                                        className="form-control" 
                                        name="phone"
                                        minLength="2"
                                        onChange={this.onChange}
                                        value={this.state.phone}
                                        required/>

                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="balance">Balance</label>
                                        <input type="text"
                                        className="form-control" 
                                        name="balance"
                                        minLength="2"
                                        onChange={this.onChange}
                                        value={this.state.balance}
                                        disabled={!disableBalanceOnAdd}
                                        required/>

                                    </div>
                                    <input 
                                        type="submit"
                                        value="Submit"
                                        className="btn btn-primary btn-block"
                                    >
                                    </input>
                                </form>
                            </div>
                        </div>
                </div>
                
                <div>
                    
                </div>

            </div>
        )
    }
 }

addClients.propTypes = {
    firestore: PropTypes.object.isRequired,
    settingsReducer: PropTypes.object.isRequired
}

export default compose(
    firestoreConnect(),
    connect((state,props) =>({
        settingsReducer: state.settingsReducer
    }))
)(addClients);
// export default addClients
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import {connect} from 'react-redux'
import {setDisableBalanceOnAdd,setDisableBalanceOnEdit,setAllowRegistraion} from '../../Actions/settingsActions'
import AppNavbar from '../Layouts/AppNavbar';


class Settings extends Component {

    AllowRegistraion = () =>{
        const { setAllowRegistraion} = this.props;
        setAllowRegistraion()
    }

    DisableBalanceOnAdd = () => {
        const { setDisableBalanceOnAdd } = this.props;
        setDisableBalanceOnAdd()
    }

    DisableBalanceOnEdit = () => {
        const { setDisableBalanceOnEdit } = this.props;
        setDisableBalanceOnEdit()
    }

    render() {
        const {allowRegistration,disableBalanceOnAdd,disableBalanceOnEdit} = this.props.settings
        return (
            <div>
                <AppNavbar/>
                <div className="container pt-5">
                    <div className="row"> 
                        <div className="col-6">
                            <Link to="/dashboard" className="btn btn-link">
                                Back to dashboard
                            </Link>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header">
                           <h2>Settings</h2>
                        </div>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label className="spacing">Allow Registration</label>
                                    <input type="checkbox" name="allowRegistration" checked={!!allowRegistration} onChange={this.AllowRegistraion}></input>
                                </div>
                            </form>
                            <form>
                                <div className="form-group">
                                    <label className="spacing">Allow Balance on Add</label>
                                    <input type="checkbox" name="allowRegistration" checked={!!disableBalanceOnAdd} onChange={this.DisableBalanceOnAdd}></input>
                                </div>
                            </form>
                            <form>
                                <div className="form-group">
                                    <label className="spacing">Allow Balance Edit</label>
                                    <input type="checkbox" name="allowRegistration" checked={!!disableBalanceOnEdit} onChange={this.DisableBalanceOnEdit}></input>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
                
            </div>
        )
    }
}

Settings.propTypes = {
    settings: PropTypes.object.isRequired,
    setDisableBalanceOnAdd: PropTypes.func.isRequired,
    setDisableBalanceOnEdit: PropTypes.func.isRequired,
    setAllowRegistraion: PropTypes.func.isRequired
}

export default connect(
    (state,props)=>({
    auth:state.firebase.auth,
    settings:state.settingsReducer
}),{setDisableBalanceOnAdd,setDisableBalanceOnEdit,setAllowRegistraion})(Settings);
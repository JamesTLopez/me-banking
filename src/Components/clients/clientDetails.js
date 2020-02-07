import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {compose} from 'redux'
import { connect} from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import AppNavbar from '../Layouts/AppNavbar';


class clientDetails extends Component {
    
    render() {
        const {client} = this.props
       
        if(client){
            return (
                <div>
                     <AppNavbar/>
                     <div className="container">
                         <div className="p-3">
                            <div className="card">
                                <div className="card-header">
                                    <h1>Details</h1>
                                </div>
                                <div className="card-body">
                                   <div className="row">
                                    <label htmlFor="firstName">First Name</label>
                                            <div className="input-group mb-3">
                                                <input type="text" className="form-control" placeholder={client.firstName} aria-label="Recipient's username" aria-describedby="basic-addon2" readOnly/>
                                            </div>
                                   </div>

                                   <div className="row">
                                    <label htmlFor="email">Email</label>
                                            <div className="input-group mb-3">
                                                <input type="text" className="form-control" placeholder={client.email} aria-label="Recipient's username" aria-describedby="basic-addon2" readOnly/>
                                            </div>
                                   </div>
                                   <div className="row">
                                    <label htmlFor="phone">Phone</label>
                                            <div className="input-group mb-3">
                                                <input type="text" className="form-control" placeholder={client.phone} aria-label="Recipient's username" aria-describedby="basic-addon2" readOnly/>
                                            </div>
                                   </div>
                                   <div className="row">
                                    <label htmlFor="balance">Balance</label>
                                            <div className="input-group mb-3">
                                                <input type="text" className="form-control" placeholder={client.balance} aria-label="Recipient's username" aria-describedby="basic-addon2" readOnly/>
                                            </div>
                                   </div>
                                   <div className="row">
                                        <div className="col">
                                            <input 
                                            type="edit"
                                            value="Edit Balance"
                                            className="btn btn-secondary btn-block"
                                            />
                                        </div>
                                        <div className="col">
                                            <input 
                                            type="delete"
                                            value="Delete"
                                            className="btn btn-danger btn-block"
                                            />
                                        </div>


                                   </div>
                                   
                                   
                                    
                                </div>
                             </div>
                         </div>
                     </div>
                </div>
            )
        }else{
            return( 
            <div className="container">
                <div className="d-flex justify-content-center">
                    <h1>Loading...</h1>
                </div>

            </div>
            )
        }
        
    }
}

export default compose(
    firestoreConnect((props) => [
        { collection:'clients',storeAs:'client',doc: props.match.params.id}
    ]), // or { collection: 'todos' }
    connect(({firestore:{ordered}}, props) => ({
      client: ordered.client && ordered.client[0]
    }))
   )(clientDetails);
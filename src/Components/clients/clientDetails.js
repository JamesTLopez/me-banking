import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {compose} from 'redux'
import { connect} from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import AppNavbar from '../Layouts/AppNavbar';


class clientDetails extends Component {
  

    onDelete = (e) =>{
        e.preventDefault();

        const {client , firestore} = this.props;
        firestore.delete({collection:'clients',doc:client.id},client.id).then(()=> this.props.history.push('/dashboard'));
    }
    onSubmitBalance = (e) => {
        e.preventDefault();

        const {client , firestore} = this.props;
        const {balanceUpdateAmount} = this.state;

        const clientUpdate = {
            balance:parseFloat(balanceUpdateAmount)
        }

        firestore.update({collection:'clients',doc:client.id},clientUpdate)

        
    }
    
    

    render() {
        const {client} = this.props
        const {disableBalanceOnEdit} = this.props.settingsReducer
       
        if(client){
            return (
                <div>
                     <AppNavbar/>
                     <div className="container">
                         <div className="p-3">
                             <Link to='/dashboard'>Back to dashboard</Link>
                            <div className="card">
                                <div className="card-header">
                                    <h1>Details</h1>
                                </div>
                                <div className="card-body">
                                   <div className="row px-2">
                                    <label htmlFor="firstName">Name</label>
                                            <div className="input-group mb-3">
                                                <input type="text" className="form-control" placeholder={client.firstName + ' ' + client.lastName} aria-label="Recipient's username" aria-describedby="basic-addon2" readOnly/>
                                            </div>
                                   </div>

                                   <div className="row px-2">
                                    <label htmlFor="email">Email</label>
                                            <div className="input-group mb-3">
                                                <input type="text" className="form-control" placeholder={client.email} aria-label="Recipient's username" aria-describedby="basic-addon2" readOnly/>
                                            </div>
                                   </div>
                                   <div className="row px-2">
                                    <label htmlFor="phone">Phone</label>
                                            <div className="input-group mb-3">
                                                <input type="text" className="form-control" placeholder={client.phone} aria-label="Recipient's username" aria-describedby="basic-addon2" readOnly/>
                                            </div>
                                   </div>
                                   <div className="row px-2">
                                    <label htmlFor="balance">Balance</label>
                                            <div className="input-group mb-3">
                                                <input type="text" className="form-control" placeholder={client.balance} aria-label="Recipient's username" aria-describedby="basic-addon2" readOnly/>
                                            </div>
                                   </div>
                                   <div className="row border border-light p-1 m-3 rounded">
                                    <h4>Transaction history:</h4>
                                    <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th>Charge Carrier</th>
                                            <th>Date</th>
                                            <th>Time</th>
                                            <th>Amount</th>
                                            <th/>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Freedom</td>
                                            <td>September</td>
                                            <td>3:42pm</td>
                                            <td>$82.42</td>
                                        </tr>
                                        
                                    </tbody>

                                    </table>
                                </div>
                                   <div className="row px-2">
                                        <div className="col">
                                            <Link 
                                            type="edit"
                                            value="Edit Balance"
                                            className="btn btn-secondary btn-block"
                                            onClick={this.onEdit}
                                            to={`/client/edit/${client.id}`}
                                            disabled={disableBalanceOnEdit}
                                            >
                                                Edit Balance
                                            </Link>
                                        </div>
                                        <div className="col">
                                            <button 
                                            type="delete"
                                            value="Delete"
                                            className="btn btn-danger btn-block"
                                            onClick={this.onDelete}
                                            >
                                                Delete
                                                </button>
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
    connect(({firestore:{ordered},settingsReducer}, props) => ({
      client: ordered.client && ordered.client[0],
      settingsReducer
    }))
   )(clientDetails);
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {compose} from 'redux'
import { connect} from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'


class Clients extends Component {
 
    render() {

        const {clients} = this.props;

        if(clients){
            return (
                <div>
                    <div className="row">
                        <div className="col">
                            <h1>Clients</h1>
                        </div>

                    </div>
                    <div className="row">
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Balance</th>
                                    <th/>
                                </tr>
                            </thead>
                            <tbody>
                                {clients.map(clients =>(
                                    <tr key={clients.id}>
                                        <td> {clients.firstName} {clients.lastName}</td>
                                        <td> {clients.email}</td>
                                        <td>{clients.phone}</td>
                                        <td>{clients.balance}</td>
                                        <td><Link to={`/client/${clients.id}`} className="btn btn-primary btn-sm"> Expand</Link></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                    </div>
                </div>
            )
        }else{
            
            return <h1>Loading...</h1>
        }

      
    }
}


export default compose(
    firestoreConnect(() => [{collection:'clients'}]), // or { collection: 'todos' }
    connect((state, props) => ({
      clients: state.firestore.ordered.clients
    }))
   )(Clients)
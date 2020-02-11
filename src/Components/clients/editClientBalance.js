import React, { Component } from 'react'
import {compose} from 'redux'
import { connect} from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { Link } from 'react-router-dom'

class editClientBalance extends Component {
    
    
    state = {
        showBalanceUpdate:false,
        balanceUpdateAmount:''
    }
    
    

    onChange = (e) => {
        this.setState({[e.target.name]:e.target.value})
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
        

        if(client){
            return (
            
                <div className="editClientBalance container d-flex justify-content-center align-items-center">
                    <div className="container-fluid">
                    <Link to={`/client/${client.id}`}> Back to client details </Link>
                        <div className="card shadow">
                            <div className="card-header">
                                <h1>Balance</h1>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col">
                                        <h3>Total:</h3>
                                    </div>
                                    <div className="col d-flex justify-content-center">
                                        <h3>{'$'+client.balance}</h3>
                                    </div>
                                </div>    
                                    <form onSubmit={this.onSubmitBalance}>
                                        <label htmlFor="email">Edit balance</label>
                                            <div className="input-group mb-3">
                                                <input type="text" 
                                                    name="balanceUpdateAmount"
                                                    className="form-control"
                                                    placeholder={client.balance}                                 
                                                    value={this.state.balanceUpdateAmount}
                                                    onChange={this.onChange}/>
                                            </div>
                                            <div className="row">
                                                <div className="col">
                                                    <button type="delete" value="Submit" className="btn btn-success btn-block"> Submit </button>
                                                </div>
                                              
                                            </div>
                                    </form>
                                    
                                      
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
   )(editClientBalance);

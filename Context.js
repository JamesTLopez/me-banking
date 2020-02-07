import React, { Component } from 'react'
import  axios from 'axios'
const Context = React.createContext();

const reducer = (state,action) => {
    switch(action.type){
        case 'DELETE':
            return { 
                ...state,
                contacts:state.contacts.filter(contact => contact.id !== action.payload)
            }
        case 'EDIT':
            return { 
                ...state,
                 contacts:state.contacts.map(contact => contact.id === action.payload.id ? (contact = action.payload) : contact)
            }
        case 'SUBMIT':
            return { 
                ...state,
                 contacts:[action.payload,...state.contacts]
            }        
        
        default:
        return state;

    }
}

//Provides the current state to the components
export class Provider extends Component {

    state = {
        contacts: [],
        dispatch: action => this.setState(state => reducer(state,action))
        
    }
    
    async componentDidMount(){
        const res = await axios.get('https://jsonplaceholder.typicode.com/users');

        this.setState({contacts:res.data})
    }


    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children }
            </Context.Provider> 
        )
    }
}

export const Consumer = Context.Consumer;

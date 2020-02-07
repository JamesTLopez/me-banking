import React, { Component } from 'react'
import Clients from '../clients/Clients'
import Sidebar from '../Layouts/Sidebar'
import AppNavbar from './AppNavbar'


export default class Dashboard extends Component {

    render() {
        
        return (

            <div className="Dashboard">
                <AppNavbar/>
                <div className="container mt-5">
                    <div className="row ">
                        <div className="col-md-10 shadow-sm">
                            <Clients/>
                        </div>
                        <div className="col-md-2 ">
                            <Sidebar/>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}

import React from 'react'
import { Link } from 'react-router-dom';


export default function Sidebar() {
    return (
        <div>
            <Link to="/client/add" className="btn btn-success btn-block">
                Add
            </Link>  
            <Link to="/settings" className="btn btn-danger btn-block">
                Settings
            </Link>          
        </div>
    )
}

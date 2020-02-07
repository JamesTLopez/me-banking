import React from 'react'

export default function login() {
    return (
        <div className="login-section shadow p-3  bg-white rounded">
            <div className="card p-3">
                <form>
                    <div className="form-group">
                        <label >Email Address</label>
                        <input type="email" className="form-control"></input>
                    </div>
                    <div className="form-group">
                        <label >Password</label>
                        <input type="password" className="form-control"></input>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}

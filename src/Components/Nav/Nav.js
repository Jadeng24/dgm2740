import React, { Component } from 'react';
import './Nav.css';

class Nav extends Component {
    constructor() {
        super();

        this.state = {

        }
    }

    render() {
        return (
            <div className='Nav'>
                <div className="topNav">
                    <h1>Device Testing</h1>
                </div>
                <div className="bottomNav">
                    <h3>Mine</h3>
                    <h3>Contact</h3>
                </div>
            </div>
        )
    }
}
export default Nav;
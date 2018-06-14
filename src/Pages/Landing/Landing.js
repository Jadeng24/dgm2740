import React, { Component } from 'react';
import './Landing.css';

// Components
import Nav from '../../Components/Nav/Nav.js';
import Footer from '../../Components/Footer/Footer.js';
class Landing extends Component {
    constructor() {
        super();

        this.state = {

        }
    }

    render() {
        return (
            
                <div className='Landing'>
                    <Nav />
                    <h1>Hello World</h1>
                    <Footer />
                </div>
      
        )
    }
}
export default Landing;
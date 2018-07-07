import React, { Component } from 'react';

class NavBar extends Component {
    render() {
        return (
            <div className="container">
                <div className="navbar">
                    <a href="#" className="toggle" id="navHamburger">
                        <i className="fas fa-bars"></i>
                    </a>
                    <a href="#" className="brand">MyName</a>
                    <div className="left">
                        <a href="#" className="link">Link 1</a>
                        <a href="#" className="link">Link 2</a>
                    </div>
                    <div className="right">
                        <a href="#" className="link">Link 3</a>
                    </div>
                </div>
            </div>
        );
    }
}
export default NavBar;      
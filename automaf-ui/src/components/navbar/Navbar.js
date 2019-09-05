import React, { Component } from 'react';
import './Navbar.css';

export default class Navbar extends Component {
    render() {
        return (
            <div className="nav-wrap">
                <p className="nav-header">AutoMaf</p>
                <small className="nav-version">alpha 1</small>
            </div>
        );
    }
}
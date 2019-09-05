import React, { Component } from 'react';
import GameSwitcher from '../gameSwitcher/GameSwitcher';
import './Navbar.css';

export default class Navbar extends Component {
    render() {
        return (
            <div className="nav-wrap">
                <div className="nav-left-wrap">
                    <p className="nav-header">AutoMaf</p>
                    <small className="nav-version">alpha 1</small>
                </div>
                <div className="nav-right-wrap">
                    <GameSwitcher/>
                </div>
            </div>
        );
    }
}
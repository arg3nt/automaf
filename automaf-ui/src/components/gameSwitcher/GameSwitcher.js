import React, { Component } from 'react';
import './GameSwitcher.css';


export default class GameSwitcher extends Component {
    render() {
        return (
            <div className="switch-wrap">
                <p style={{marginTop: '1.4rem'}}>Game Switcher ▼</p>
            </div>
        );
    }
}
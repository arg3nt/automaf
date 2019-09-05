import React, { Component } from 'react';
import './PhaseTracker.css';

export default class PhaseTracker extends Component {
    render() {
        return (
            <div className="track-wrap">
                <div className="track-wrap-left">
                    <p>Current Phase:</p>
                    <p>Night 1</p>
                    <div className="track-graph-wrap">
                        <div className="track-graph-line"><div></div></div>
                        <div className="track-graph-dots">
                            <div className="track-graph-dot dot-prev">PG</div>
                            <div className="track-graph-dot dot-current"><p>N1</p></div>
                            <div className="track-graph-dot dot-next"><p>D1</p></div>
                            <div className="track-empty-dot"></div>
                        </div>
                    </div>
                </div>
                <div className="track-wrap-right">
                    <div className="phaseButton">End Phase</div>
                </div>
                
            </div>
        );
    }
}
import React, { Component } from 'react';
import './video.css';

class Video extends Component {
    render() {
        return (
            <div className="embed">
                <video src={this.props.src} className="embed-item" controls></video>
            </div>
        );
    }
}

export default Video;

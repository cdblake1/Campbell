import React, { Component } from 'react';
import './input.css'


class Input extends Component {
    render() {
        let type = this.props.type;
        let label = this.props.label;
        return (
            <div className="input-item">
                <label className="label">{label}</label>
                <input className="input" type={type} />
            </div>
        );
    }
}

export default Input;

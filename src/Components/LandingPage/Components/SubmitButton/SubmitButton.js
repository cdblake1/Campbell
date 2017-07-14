import React, { Component } from 'react';
import './submitButton.css';


class SubmitButton extends Component {
    render() {
        let value = this.props.value;
        return (
            <div>
                <input className="button" type="submit" value={value} />
            </div>
        );
    }
}

export default SubmitButton;

import React, {Component} from 'react';

export default class Content extends Component {
    render() {
        return (
            <div>
                <p>{this.props.text}</p>
            </div>
        );
    }
}
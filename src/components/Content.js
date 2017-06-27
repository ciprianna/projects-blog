import React, {Component} from 'react';
// import styles from './App.css';

export default class Content extends Component {
    render() {
        return (
            <div>
                <p>{this.props.text}</p>
            </div>
        );
    }
} // TODO - add icons and links here
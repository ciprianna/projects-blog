import React, {Component} from 'react';
import styles from './App.css';

export default class Footer extends Component {
    render() {
        return (
            <div className={styles.footer}>
            <br />
                <p>{this.props.author}</p>
                <p>{this.props.twitter}</p>
                <p>{this.props.github}</p>
            </div>
        );
    }
}
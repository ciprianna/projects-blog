import React, {Component} from 'react';
import styles from '../style/base/App.css';

export default class Header extends Component {
    render() {
        return (
            <div className={styles.header}>
                <h2>{this.props.header}</h2>
            </div>
        );
    }
}
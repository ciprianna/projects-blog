import React, {Component} from 'react';
import '../App.scss';

export default class Footer extends Component {
    render() {
        return (
            <div className={'footer'}>
            <br />
                <p>{this.props.author}</p>
                <p>{this.props.twitter}</p>
                <p>{this.props.github}</p>
            </div>
        );
    }
} // TODO - add icons and links here
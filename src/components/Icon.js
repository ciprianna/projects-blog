import React, {Component} from 'react';
import '../App.scss';

export default class Footer extends Component {
    render() {
        return (
            <img src={this.props.imageSource} width="20" height="20" alt={this.props.altText} class="icon" />
        );
    }
}
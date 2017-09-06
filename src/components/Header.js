import React, {Component} from 'react';
import '../App.scss';

export default class Header extends Component {
    render() {
        return (
            <div className={'header_div'}>
                <h2 className={'header_text'}>{this.props.header}</h2>
            </div>
        );
    }
}
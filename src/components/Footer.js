import React, {Component} from 'react';
import '../App.scss';
import Icon from './Icon.js';
import HeartIcon from '../icons/heart.svg';
import TwitterIcon from '../icons/twitter-with-circle.svg';
import GithubIcon from '../icons/github.svg';

var twitter = new Image();
twitter.src = TwitterIcon;
var github = new Image();
github.src = GithubIcon;
var heart = new Image();
heart.src = HeartIcon;

export default class Footer extends Component {
    render() {
        return (
            <div className={'footer'}>
            <br />
                <p><Icon imageSource={heart.src} altText={"Heart for No Reason"}></Icon> {this.props.author}</p>
                <p><Icon imageSource={twitter.src} altText={"Twitter Logo"}></Icon> {this.props.twitter}</p>
                <p><Icon imageSource={github.src} altText={"Github Logo"}></Icon> {this.props.github}</p>
            </div>
        );
    }
}
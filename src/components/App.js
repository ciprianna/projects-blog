import React, {Component, PropTypes} from 'react';
import '../App.scss';
import { Button } from 'react-bootstrap';
import Navbar from './Navbar.js';
import Header from './Header.js';
import Content from './Content.js';
import Footer from './Footer.js';

export default class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            textContent: ""
        }
    }

    render() {
        this.getPostText();
        return <div className={'app'}>
          <Header header={'Hello, Kitten'}></Header>
          <Navbar></Navbar>
          <Content text={this.state.textContent}></Content>
          <Footer author={'Ciprianna Engel'} twitter={'ciprianna17'} github={'ciprianna'}></Footer>
        </div>
    }

    getPostText() {
        const post1 = new XMLHttpRequest();
        post1.open('GET', 'file:///src/content/post1.txt', true);
        post1.onReadyStateChange = function() {
            if(post1.readyState === 4) {
                this.setState({textContent: post1.responseText});
            }
        }
        post1.send(null);
    }
};
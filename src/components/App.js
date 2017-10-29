import React, {Component, PropTypes} from 'react';
import '../App.scss';
import { Button } from 'react-bootstrap';
import Navbar from './Navbar.js';
import Header from './Header.js';
import Content from './Content.js';
import Footer from './Footer.js';

const post1 = require('../content/post1.json');

export default class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            textContent: ""
        }
    }

    render() {
        return <div className={'app'}>
          <Header header={'Hello, Kitten'}></Header>
          <Navbar></Navbar>
          <Content textContent={this.state.textContent}></Content>
          <Footer author={'Ciprianna Engel'} twitter={'ciprianna17'} github={'ciprianna'}></Footer>
        </div>
    }

    getPostText() {
        this.setState({textContent: post1.content});
    }

    componentDidMount() {
        this.getPostText();
    }
};
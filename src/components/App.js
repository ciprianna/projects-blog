import React, {Component, PropTypes} from 'react';
import '../App.scss';
import { Button } from 'react-bootstrap';
import Navbar from './Navbar.js';
import Header from './Header.js';
import Content from './Content.js';
import PostListing from './PostListing.js';
import Footer from './Footer.js';
import { Route, Link, Switch } from 'react-router-dom';

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
            <Switch>
                <Route exact path='/posts' component={PostListing}/>
                // <Route exact path='/posts/:id' render={()=>}/>
                <Route path='/about' render={()=><Content textContent={"This is a future about page..."}></Content>}/>
                <Route path='/' render={()=><Content textContent={"Welcome to the Home page! Mrow!"}></Content>}/>
            </Switch>
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
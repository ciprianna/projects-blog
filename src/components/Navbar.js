import React, {Component} from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <NavLink exact to='/' activeClassName={"active_link"}>Home</NavLink>
                <NavLink to='/posts' activeClassName={"active_link"}>Posts</NavLink>
                <NavLink to='/about' activeClassName={"active_link"}>About</NavLink>
            </div>
        );
    }
}
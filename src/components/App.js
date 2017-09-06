import React from 'react';
import '../App.scss';
import Navbar from './Navbar.js';
import Header from './Header.js';
import Content from './Content.js';
import Footer from './Footer.js';

const App = () => (
  <div className={'app'}>
    <Header header='Hello, Kitten'></Header>
    <Navbar></Navbar>
    <Content text='This is where I will talk about cats all day.'></Content>
    <Footer author='Ciprianna Engel' twitter='ciprianna17' github='ciprianna'></Footer>
  </div>
);

export default App;
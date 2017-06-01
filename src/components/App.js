import React from 'react';
import styles from '../style/base/App.scss';
import Footer from './Footer.js';
import Header from './Header.js';

const App = () => (
  <div className={styles.app}>
    <Header header='Hello, Kitten'></Header>
    <Footer author='Ciprianna Engel' twitter='ciprianna17' github='ciprianna'></Footer>
  </div>
);

export default App;
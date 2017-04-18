import React from 'react';
import styles from './App.css';
import Footer from './Footer.js';

const App = () => (
  <div className={styles.app}>
    <h2>Hello, Kitten</h2>
    <Footer author='Ciprianna Engel' twitter='ciprianna17' github='ciprianna'></Footer>
  </div>
);

export default App;
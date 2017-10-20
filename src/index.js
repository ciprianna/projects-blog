import React from 'react';
import ReactDOM from 'react-dom';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.css';

import { AppContainer } from 'react-hot-loader';
// AppContainer is a necessary wrapper component for HMR

import App from './components/App';

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component/>
    </AppContainer>,
    document.getElementById('root')
  );
};

render(App);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./components/App', () => {
    render(App)
  });
}

// TODO
// - Create content/blog post component
// - Create extra pages:
//     - Home page
//     - About page (link to photo on posts layout)
//     - History/Posts
// - Create nav menu (full site and mobile)
// - Share links (twitter, fb)
// - Create tags for posts and add search capabilities on Posts page
// - Show similiar posts based on tags
// - Extract text plugin for builds
// - Page rank?

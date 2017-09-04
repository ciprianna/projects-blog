import React from 'react';
import ReactDOM from 'react-dom';
import './App.scss';

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
// - Load font and icons with webpack file-loader https://webpack.js.org/guides/asset-management/#loading-css
// - Look into something like Bootstrap (for media queries/icons)
// - Create content/blog post component
// - Create extra pages:
//     - Home page
//     - About page (link to photo on posts layout)
//     - History/Posts
// - Create nav menu (full site and mobile)
// - Share links (twitter, fb)
// - Create tags for posts and add search capabilities on Posts page
// - Show similiar posts based on tags
// - Page rank?

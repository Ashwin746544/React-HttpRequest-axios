import React, { Component } from 'react';

import Blog from './containers/Blog/Blog';
import { BrowserRouter } from "react-router-dom";

class App extends Component {
  render() {
    return (
      // <BrowserRouter basename='/my-app'> if we deploy our react-app on different server under my-app directory
      <BrowserRouter>
        <div className="App">
          <Blog />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

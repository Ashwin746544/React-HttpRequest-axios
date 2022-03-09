import React, { Component } from 'react';

import './Blog.css';
import Posts from './Posts/Posts';
// import NewPost from './NewPost/NewPost'; //commented this because using Lazy Loading
import FullPost from './FullPost/FullPost';
import { Route, Routes, Link, NavLink, Switch, Redirect } from 'react-router-dom';
import asyncComponent from '../../hoc/asyncComponent';


const AsyncNewPost = asyncComponent(() => {
  return import("./NewPost/NewPost");
});
class Blog extends Component {
  state = {
    auth: true
  }

  render() {
    console.log("[Blog] rendered");
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li><NavLink
                to='/posts'
                // activeClassName='my-active'
                activeStyle={{
                  color: "#fa923f",
                  textDecoration: "underline"
                }}
                exact
              >Home</NavLink></li>
              <li><NavLink to={{
                pathname: "/new-post",
                hash: "#submit",
                search: "?quick-submit=true"
              }}>New Post</NavLink></li>
            </ul>
          </nav>
        </header>
        {/* <Routes>   version - 6
          <Route path='/' element={<h1>HOME 1</h1>} />
          <Route path='/' element={<h1>HOME 2</h1>} />
          <Route path='/new-post' element={<h1>HOME 2</h1>} />
        </Routes> */}
        {/* version - 5 */}
        {/* <Route path='/' exact render={() => <h1>HOME 1</h1>} />
        <Route path='/' render={() => <h1>HOME 2</h1>} /> */}
        <Switch>
          {/* {this.state.auth ? <Route path="/new-post" component={NewPost} /> : null} */}
          {this.state.auth ? <Route path="/new-post" component={AsyncNewPost} /> : null}
          <Route path="/posts" component={Posts} />
          {/* <Route path="/" component={Posts} /> */}
          {/* <Redirect from='/' to="/posts" /> */}
          <Route render={() => <h1>NOT FOUND</h1>} />
        </Switch>
      </div>
    );
  }
}

export default Blog;
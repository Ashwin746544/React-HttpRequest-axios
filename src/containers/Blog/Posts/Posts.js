import './Posts.css';
import Post from '../../../components/Post/Post';
import axiosInstance from '../../../axiosInstance';
import { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import FullPost from '../FullPost/FullPost';

class Posts extends Component {
  state = {
    posts: [],
    // selectedPostId: null,
    // error: false
  }
  componentDidMount() {
    console.log("[Blog] componentDidMount");
    console.log(this.props);
    // axios.get("/posts")
    axiosInstance.get("/posts")
      .then(response => {
        const posts = response.data.slice(0, 4);
        const updatedPosts = posts.map(post => { return { ...post, author: "Max" } }
        );
        this.setState({ posts: updatedPosts });
        console.log(response);
      }
      )
      .catch(error => {
        console.log(error);
        // this.setState({ error: true });
      });
  }
  postSelectedHandler = (id) => {
    // this.props.history.push({pathName: "/posts/" + id});
    this.props.history.push("/posts/" + id);
  }
  render() {
    console.log("[Posts] rerendered! ");
    let posts = <p style={{ textAlign: "center" }}>Something Went Wrong!</p>
    if (!this.state.error) {
      posts = this.state.posts.map(
        post => {
          // return <Link to={"/posts/" + post.id} key={post.id}>
          return <Post key={post.id} title={post.title} author={post.author} clicked={() => this.postSelectedHandler(post.id)} />
          // </Link>;
        }
      );
    }
    return (
      <div>
        <section className="Posts">
          {posts}
        </section>
        <Route path={this.props.match.url + "/:id"} exact component={FullPost} />
      </div>);

  }
}

export default Posts;
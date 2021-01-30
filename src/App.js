import React, { Component } from 'react'
import Posts from './components/Posts';
import Pagination from './components/Pagination';
import axios from 'axios';
import appCSS from './App.module.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: [] , 
      currentPage: 1,
      loading: false,
      postsPerPage: 10
    }
  }

//Lifecycle 
componentDidMount() {
  this.fetch()
}
//Fetching api
  fetch = async () => {
    this.setState({loading: true})
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
    this.setState({posts: res.data})
    this.setState({loading: false})
  };

  render() {
    const {posts, currentPage, loading, postsPerPage} = this.state

    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    // Change page
    const paginate = pageNumber => this.setState({currentPage: pageNumber});
    return (
      <div className='container mt-5'>
        <h1 className={`${appCSS.primaryText} mb-3`}>My Blog</h1>
        <Posts posts={currentPosts} loading={loading} />
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={posts.length}
          paginate={paginate}
        />
      </div>
    )
  }
}
export default App;

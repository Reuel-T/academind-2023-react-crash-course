import { React, useState, useEffect } from 'react'
import { useLoaderData } from 'react-router-dom';
import Post from './Post'

import classes from './PostList.module.css';

function PostList() {
/*   const [enteredBody, setEnteredBody] = useState('');
  const [enteredAuthor, setEnteredAuthor] = useState('');
  
    Lifting State
    we set our state in a component that holds the two components

    we pass the handler function using props,
    the receiving component calls the handler function 
    to change the state, and the component is redrawn
  
  
   function bodyChangeHandler(event) {
    setEnteredBody(event.target.value);
  }

  function authorChangeHandler(event) {
    setEnteredAuthor(event.target.value);
  } */

  const posts = useLoaderData();//get info from react router
  //const [posts, setPosts] = useState([]);
  //const [isFetching, setIsFetching] = useState(false);

/*   useEffect(() => {
    async function fetchPosts() {
      setIsFetching(true);
      const response = await fetch('http://localhost:8080/posts');
      const resData = await response.json();
      if (!response.ok) {
        console.log('API Fetch failed');
      }
      setPosts(resData.posts);
      setIsFetching(false);
    }
    fetchPosts();
   }, []); */
  //the function is executed by react whenever it considers the effect to require execution
  //the array specifies the dependencies that will cause the use effect function to run again
  //empty, the function has no dependencies, it will only run when the component is rendered


/*   function addPostHandler(postData) {
    fetch('http://localhost:8080/posts', {
      method: 'POST',
      body: JSON.stringify(postData),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    setPosts((existingPosts) => [postData, ...existingPosts]);
    console.log(posts);
    //using an arrow function is better when new state is based on previous state
  }
 */
  return (
    <>
      {
        posts.length > 0 &&
        <ul className={ classes.posts }>
            {posts.map(post =>
              <Post
                key={post.id}
                id={post.id}
                author={post.author}
                body={post.body} />)}
      </ul>
      }
      {
        posts.length === 0 && 
        <div style={{ textAlign: 'center', color: 'white' }}>
            <h2>No Posts at the moment</h2>
        </div>  
      }
    </> 
  )
}

export default PostList
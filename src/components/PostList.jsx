import {React, useState} from 'react'
import Modal from './Modal';
import NewPost from './NewPost';
import Post from './Post'

import classes from './PostList.module.css';

function PostList({ isPosting, onStopPosting }) {

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

  const [posts, setPosts] = useState([]);

  function addPostHandler(postData) {
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

  return (
    <>
      {/* Conditional Rendering of modal, depending on, if modal is visible, render modal, else render null  */
        isPosting && (
          <Modal Modal onClose={onStopPosting}>
            <NewPost
              onAddPost= {addPostHandler}
              onCancel={onStopPosting} />
          </Modal>
        )
      }

      {
        posts.length > 0 &&
        <ul className={ classes.posts }>
        {posts.map(post => <Post key={post.body} author={post.author} body={post.body} />)}
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
import Modal from '../components/Modal';
import { Link, Form, redirect } from 'react-router-dom';

import classes from './NewPost.module.css';

function NewPost({ onAddPost}) {
    //a state value that belongs to a component
    //const [enteredBody, setEnteredBody] =  useState('');//default value
    /*
        stateData[0] // the current value
        stateData[1] // function to update value 
        react will rexecute the function in which useState was
        registered therefore updating the UI, react will only 
        redraw parts of the UI that have changed to reduce drawing in the dom
    */
    
    //const [enteredBody, setEnteredBody] = useState('');
    //const [enteredAuthor, setEnteredAuthor] = useState('');
    
    /* function bodyChangeHandler(event) {
        setEnteredBody(event.target.value);
    }
    
    function authorChangeHandler(event) {
        setEnteredAuthor(event.target.value);
    } */

/*     function submitHandler(event) {
        event.preventDefault();//stop browser default submit
        const postData = {
            body: enteredBody,
            author: enteredAuthor
        };

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

        console.log(postData);
        onAddPost(postData);
        onCancel();
    } */

    return (
        <Modal>
            <Form method='post' className={classes.form}>
            <p>
                <label htmlFor="body">Text</label>
                    <textarea id="body" name='body' required rows={3} />
            </p>
            <p>
                <label htmlFor="name">Your name</label>
                <input type="text" name='author' id="name" required />
            </p>
            <p className={classes.actions}>
                <Link to='..' type='button' className={classes.button}>Cancel</Link>
                <button type='submit'>Submit</button>
            </p>
            </Form>
        </Modal>
    );
}

export default NewPost;

//data is passed in by the router, 
export async function action(data) {
    const formData = await data.request.formData();
    const postData = Object.fromEntries(formData);//gets the key value objects from the form
    await fetch('http://localhost:8080/posts', {
        method: 'POST',
        body: JSON.stringify(postData),
        headers: {
        'Content-Type': 'application/json'
        }
    });
    return redirect('/');
}
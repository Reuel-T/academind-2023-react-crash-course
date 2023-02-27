import { useState } from 'react';

import classes from './NewPost.module.css';

function NewPost({ onCancel, onAddPost}) {
    //a state value that belongs to a component
    //const [enteredBody, setEnteredBody] =  useState('');//default value
    /*
        stateData[0] // the current value
        stateData[1] // function to update value 
        react will rexecute the function in which useState was
        registered therefore updating the UI, react will only 
        redraw parts of the UI that have changed to reduce drawing in the dom
    */
    
    const [enteredBody, setEnteredBody] = useState('');
    const [enteredAuthor, setEnteredAuthor] = useState('');
    
    function bodyChangeHandler(event) {
        setEnteredBody(event.target.value);
    }
    
    function authorChangeHandler(event) {
        setEnteredAuthor(event.target.value);
    }

    function submitHandler(event) {
        event.preventDefault();//stop browser default submit
        const postData = {
            body: enteredBody,
            author: enteredAuthor
        };
        console.log(postData);
        onAddPost(postData);
        onCancel();
    }

    return (
        <form className={classes.form} onSubmit={ submitHandler }>
        <p>
            <label htmlFor="body">Text</label>
                <textarea id="body" required rows={3} onChange={ bodyChangeHandler } />
        </p>
        <p>
            <label htmlFor="name">Your name</label>
            <input type="text" id="name" required onChange={ authorChangeHandler }/>
        </p>
        <p className={classes.actions}>
            <button type='button' onClick={onCancel}>Cancel</button>
            <button type='submit'>Submit</button>
        </p>
        </form>
    );
}

export default NewPost;
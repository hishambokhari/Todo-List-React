import React, { useState, useEffect } from 'react';
import './App.css';
import {Button, FormControl, Input, InputLabel} from '@material-ui/core';
import Todo from './Todo';
import db from './firebase';
import firebase from 'firebase';



function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    //this code fires when app.js loads
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => doc.data().todo)) // gives back an array of strings 
    })
  }, []);


  const addTodo = (event) => {
    // this will fire off when we click the button
    event.preventDefault(); // stops the refresh 

    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    // setTodos([...todos, input]);
    setInput(''); // clear input field
  }

  return (
    <div>
      <h1>Hello World</h1>
      <form>
    <FormControl>
      <InputLabel>Write a Todo</InputLabel> 
      <Input value={input} onChange={event => setInput(event.target.value)}/>
    </FormControl>

      <Button  disabled={!input} type="submit" onClick={addTodo} variant="contained" color="primary">
        Add Todo
      </Button>
      {/* <button  >Add Todo</button>   */}
      </form>
  
      <ul>
        {todos.map(todo => (
          <Todo text={todo}/>
        ))}
      </ul>

    </div>
  );
}

export default App;

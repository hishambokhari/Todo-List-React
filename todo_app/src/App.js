import React, { useState } from 'react';
import './App.css';
import {Button, FormControl, Input, InputLabel} from '@material-ui/core';
import Todo from './Todo';




function App() {
  const [todos, setTodos] = useState(['Take the rubbish out', 'Dogs have to go for a walk','I love jiu jitsu']);
  const [input, setInput] = useState('');

  const addTodo = (event) => {
    // this will fire off when we click the button
    event.preventDefault(); // stops the refresh 
    setTodos([...todos, input]);
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

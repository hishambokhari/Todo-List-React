import React, { useState } from 'react';
import './App.css';
import {Button} from '@material-ui/core';



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
      <input value={input} onChange={event => setInput(event.target.value)}/>
      <Button  disabled={!input} type="submit" onClick={addTodo} variant="contained" color="primary">
        Add Todo
      </Button>
      {/* <button  >Add Todo</button>   */}
      </form>
  
      <ul>
        {todos.map(todo => (
          <li>{todo}</li>
        ))}
      </ul>

    </div>
  );
}

export default App;

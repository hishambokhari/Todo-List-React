import React, { useState } from 'react';
import './App.css';


function App() {
  const [todos, setTodos] = useState(['Take the rubbish out', 'Dogs have to go for a walk']);


  return (
    <div>
      <h1>Hello World</h1>
      <input />
      <button>Add Todo</button>  
      

      <ul>
        {todos.map(todo => (
          <li>{todo}</li>
        ))}
      </ul>

    </div>
  );
}

export default App;

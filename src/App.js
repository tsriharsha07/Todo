import React, {useState} from 'react';
import Form from './components/Form';
import Todolist from './components/Todolist';

import './App.css';

function App() {
  const[input,setInput]=useState('');
  const[todos,setTodos]=useState([]);
  return (
    <div className="App">
      <header><h1>Harsha ToDO List</h1></header>
      <Form input ={input} setInput={setInput} todos={todos} setTodos={setTodos}/>
      <Todolist todos={todos} setTodos={setTodos}/>
      
    </div>
  );
}

export default App;

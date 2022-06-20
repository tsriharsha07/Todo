import React from 'react'

const Todo = ({text, todo, todos, setTodos, key}) => {
  const deleteHandler=()=>{
    setTodos(todos.filter(el => {
      return el.id !== todo.id;
    }));
    console.log(todo);
    
  };
  return (
    <div className='todo'>
        <li className='todo-item'>{text}</li>
        <button className='complete-btn'> <i className='fas fa-check'></i></button>
        <button onClick={deleteHandler} className='trash-btn'> <i className='fas fa-trash'></i></button>

    </div>
    
  )
}

export default Todo

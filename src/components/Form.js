import React from 'react'

const Form = ({input, setInput, todos, setTodos}) => {
    const inputTexthandler=(e)=>{
        //console.log(e.target.value);
        setInput(e.target.value) ;
    }

    const submitTodohandler=(e)=>{
        e.preventDefault();
        setTodos([...todos,{text:input,completed:false}]);
        setInput('');
    }
 
    return (
    
    <form>
      <input value={input} onChange={inputTexthandler } type="text" className="todo-input" />
      <button onClick={submitTodohandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
    
  );
};

export default Form

import { useState } from 'react';
import './App.css';
import InputForm from './components/InputForm';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');

  const addTodo = () => { 
    if (text.trim().length) {
      setTodos([
        ...todos,
        {
          id: new Date().toISOString(),
          text,
        }
      ])     
    }
    setText('');
  };

  const deleteTodo = (todoId) => {
    setTodos(todos.filter(todo=>todo.id !== todoId))
  }


  return (
    <div className="App">
      <InputForm text={text} hendelSubmit={addTodo} hendelInput={ setText} />
      <TodoList todos={todos}  deleteTodo={deleteTodo } />
    </div>

  );
}

export default App;

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import InputForm from './components/InputForm';
import TodoList from './components/TodoList';
import { addTodo } from './store/todoSlise';

function App() {
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  
  const addTask = () => {
    dispatch(addTodo({ text }));
    setText('');
  };

  return (
    <div className="App">
      <InputForm text={text} hendelSubmit={addTask} hendelInput={setText} />
      <TodoList/>
    </div>

  );
}

export default App;

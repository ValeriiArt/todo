import TodoItem from "./TodoItem";

const TodoList = ({todos, deleteTodo}) => {
    return (
             <ul>
            {todos.map(todo => <TodoItem key={todo.id}  deleteTodo={deleteTodo} {...todo}/>)}
            </ul>
    )
};

export default TodoList;
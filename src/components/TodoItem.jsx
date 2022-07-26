const TodoItem = ({id, text, deleteTodo}) => {
    return (
        <li key={id}>
            <p>{text}</p>
            <span className="delete" onClick={()=>deleteTodo(id)}>&times;</span>
        </li>
    )
};

export default TodoItem;
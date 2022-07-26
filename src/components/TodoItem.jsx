import { useDispatch } from "react-redux";
import { deleteTodo } from "../store/todoSlise";

const TodoItem = ({ id, text }) => {
    const dispatch = useDispatch();
    const deleteTask = () => dispatch(deleteTodo({ id }));
    
    return (
        <li key={id}>
            <p>{text}</p>
            <span className="delete"
                onClick={deleteTask}>
                &times;
            </span>
        </li>
    )
};

export default TodoItem;
import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: [],
    },
    reducers: {
        addTodo(state, action) { 
            console.log(state);
            console.log(action);
            if (action.payload.text.trim().length) { 
                state.todos.push({
                    id: new Date().toISOString(),
                    text: action.payload.text,
                });

            };
        },
        deleteTodo(state, action) { 
            state.todos = state.todos.filter(todo=>todo.id !== action.payload.id)
        },
    }
})

export const { addTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
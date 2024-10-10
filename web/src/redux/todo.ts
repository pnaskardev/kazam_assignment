import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { TodoInterface } from "../models/TodoModel";
import socket from '../api/socket'; // Import your socket instance

export const fetchTodo = createAsyncThunk("fetchTodo", async () => {
    const response = await fetch("http://localhost:3100/fetchAllTasks");
    return response.json();
});

// Shape of todos array
interface TodosListInterface {
    todos: TodoInterface[];
    loading: boolean;
    error: string | null;
}

// Initial todos state
const initialState: TodosListInterface = {
    todos: [],
    loading: false,
    error: null,
};

// Todo slice with initial state and reducers to mutate state.
export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, { payload: { task, id } }) => {
            // Emit the 'add' event to the socket
            socket.emit("add", { task, id });
            state.todos.push({id,task});
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchTodo.pending, (state) => {
            state.loading = true;
            state.error = null;
        });

        builder.addCase(fetchTodo.fulfilled, (state, action) => {
            state.loading = false;
            state.todos = action.payload;
        });

        builder.addCase(fetchTodo.rejected, (state) => {
            state.loading = false;
            state.error = 'Error fetching todos';
        });
    },
});

// Actions for telling reducer what to do with state
export const { addTodo } = todoSlice.actions;

// Reducer to change the state
export default todoSlice.reducer;

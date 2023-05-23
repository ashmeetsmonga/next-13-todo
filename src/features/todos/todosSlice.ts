import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Todo {
	id: number;
	title: string;
	description: string;
}

const initialState: { todos: Todo[] } = {
	todos: [{ id: 1, title: "Redux Todo 1", description: "Redux Todo 1 Description" }],
};

export const todosSlice = createSlice({
	name: "todos",
	initialState,
	reducers: {
		addTodo: (state, action: PayloadAction<Todo>) => {
			state.todos.push(action.payload);
		},
		deleteTodo: (state, action: PayloadAction<string>) => {
			state.todos = state.todos.filter((todo: Todo) => todo.title !== action.payload);
		},
	},
});

export const { addTodo } = todosSlice.actions;

export default todosSlice.reducer;

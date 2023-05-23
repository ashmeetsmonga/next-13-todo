import { addTodo, Todo } from "@/src/features/todos/todosSlice";
import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";

const AddTodoForm = () => {
	const [title, setTitle] = useState<string>("");
	const [description, setDescription] = useState<string>("");
	const [showSuccess, setShowSuccess] = useState<boolean>(false);

	const todos = useSelector((state: RootState) => state.todos.todos);
	const dispatch = useDispatch();

	const handleSubmit = () => {
		const newTodo: Todo = {
			id: todos.length,
			title: title,
			description: description,
		};
		dispatch(addTodo(newTodo));
		setTitle("");
		setDescription("");
		setShowSuccess(true);
		setTimeout(() => setShowSuccess(false), 2000);
	};

	return (
		<Box
			sx={{
				width: "50rem",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				gap: "1rem",
				marginTop: "4rem",
			}}
		>
			<TextField
				fullWidth
				required
				value={title}
				onChange={(e) => setTitle(e.target.value)}
				id='todo-title'
				label='Todo Title'
			/>
			<TextField
				fullWidth
				required
				value={description}
				onChange={(e) => setDescription(e.target.value)}
				id='todo-description'
				label='Todo Description'
			/>
			<Button onClick={handleSubmit} sx={{ width: "fit-content" }} variant='contained'>
				Add Todo
			</Button>
			{showSuccess && (
				<Typography variant='subtitle1' sx={{ color: "success.main" }}>
					Todo Added Successfully !!!
				</Typography>
			)}
		</Box>
	);
};

export default AddTodoForm;

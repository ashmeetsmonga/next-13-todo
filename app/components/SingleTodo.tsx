import { Todo } from "@/src/features/todos/todosSlice";
import { Box, Button, Paper, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

interface TodoProps {
	todo: Todo;
}

const SingleTodo = ({ todo }: TodoProps) => {
	const dispatch = useDispatch();

	const handleDelete = () => {};

	return (
		<Paper
			sx={{
				width: "50rem",
				margin: ".5rem",
				display: "flex",
				justifyContent: "space-between",
				alignItems: "center",
				backgroundColor: "primary.main",
				padding: "1rem",
			}}
		>
			<div>
				<Typography variant='h5' component='p' color='white' sx={{ fontWeight: "light" }}>
					{todo.title}
				</Typography>
				<Typography variant='subtitle1' component='p' color='white' sx={{ fontWeight: "light" }}>
					{todo.description}
				</Typography>
			</div>
			<Button
				onClick={handleDelete}
				variant='contained'
				disableElevation
				color='error'
				startIcon={<DeleteIcon />}
			>
				Delete
			</Button>
		</Paper>
	);
};

export default SingleTodo;

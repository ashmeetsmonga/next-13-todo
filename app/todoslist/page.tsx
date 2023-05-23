"use client";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";
import TodosList from "../components/TodosList";

const TodosListPage = () => {
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				padding: 4,
			}}
		>
			<Typography variant='h3' component='div' color='primary' sx={{ fontWeight: "light" }}>
				Todos List
			</Typography>
			<TodosList />
		</Box>
	);
};

export default TodosListPage;

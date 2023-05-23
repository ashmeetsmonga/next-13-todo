"use client";
import { Box, Typography } from "@mui/material";
import React from "react";
import AddTodoForm from "./AddTodoForm";

const AddTodoPage = () => {
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
				Add Todo
			</Typography>
			<AddTodoForm />
		</Box>
	);
};

export default AddTodoPage;

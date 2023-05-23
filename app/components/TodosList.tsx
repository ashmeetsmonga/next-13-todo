import { Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import SingleTodo from "./SingleTodo";

// const todos: Todo[] = [
// 	{ id: 1, title: "Todo 1", description: "Todo 1 Description" },
// 	{ id: 2, title: "Todo 2", description: "Todo 2 Description" },
// 	{ id: 3, title: "Todo 3", description: "Todo 3 Description" },
// ];

const TodosList = () => {
	const todos = useSelector((state: RootState) => state.todos.todos);
	return (
		<>
			{todos.map((todo, idx) => {
				return <SingleTodo todo={todo} key={idx} />;
			})}
		</>
	);
};

export default TodosList;

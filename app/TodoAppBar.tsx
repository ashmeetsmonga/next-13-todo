import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "next/link";

export default function TodoAppBar() {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position='static'>
				<Toolbar>
					<Typography
						variant='h5'
						component='div'
						color='white'
						sx={{ flexGrow: 1, fontWeight: "light" }}
					>
						Todos
					</Typography>
					<Link href='/todoslist'>
						<Button variant='contained' disableElevation sx={{ fontWeight: "light" }}>
							Todos List
						</Button>
					</Link>
					<Link href='/addtodo'>
						<Button variant='contained' disableElevation sx={{ fontWeight: "light" }}>
							Add Todo
						</Button>
					</Link>
				</Toolbar>
			</AppBar>
		</Box>
	);
}

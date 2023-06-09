"use client";
import { Inter } from "next/font/google";
import { Provider } from "react-redux";
import { store } from "./store";
import TodoAppBar from "./TodoAppBar";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
// 	title: "Create Next App",
// 	description: "Generated by create next app",
// };

// const theme = createTheme({
// 	palette: {
// 		primary: {
// 			main: "#EB5160",
// 		},
// 		secondary: {
// 			main: "#071013",
// 		},
// 	},
// });

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body
				className={inter.className}
				style={{
					margin: 0,
					padding: 0,
					boxSizing: "border-box",
				}}
			>
				<Provider store={store}>
					<TodoAppBar />
					{children}
				</Provider>
			</body>
		</html>
	);
}

import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { App } from "../App.tsx";
import { Login } from "../components/Login";

export const RouterConfig: FC = () => {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route index element={<App />} />
					<Route path="login" element={<Login />} />
				</Routes>
			</BrowserRouter>
		</>
	);
};

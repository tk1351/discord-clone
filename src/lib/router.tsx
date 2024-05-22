import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { App } from "../App.tsx";

export const RouterConfig: FC = () => {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route index element={<App />} />
					<Route path="login" element={<div>Login</div>} />
				</Routes>
			</BrowserRouter>
		</>
	);
};

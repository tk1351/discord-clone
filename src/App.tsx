import { useAtom } from "jotai";
import { FC } from "react";
import { Navigate } from "react-router-dom";
import styles from "./App.module.css";
import { Chat } from "./components/Chat";
import { Sidebar } from "./components/Sidebar";
import { userAtom } from "./store";

export const App: FC = () => {
	const [user] = useAtom(userAtom);
	if (!user) {
		return <Navigate replace to="/login" />;
	}
	return (
		<div className={styles.container}>
			<Sidebar />
			<Chat />
		</div>
	);
};

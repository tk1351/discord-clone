import { FC } from "react";
import { Navigate } from "react-router-dom";
import styles from "./App.module.css";
import { Chat } from "./components/Chat";
import { Sidebar } from "./components/Sidebar";
import { useAuth } from "./hooks/useAuth.tsx";

export const App: FC = () => {
	const { user } = useAuth();

	if (!user) {
		return <Navigate replace to="/login" />;
	}
	return (
		<>
			{user.uid && user.displayName && user.photo && (
				<div className={styles.container}>
					<Sidebar
						displayName={user.displayName}
						photo={user.photo}
						uid={user.uid.substring(0, 4)}
					/>
					<Chat />
				</div>
			)}
		</>
	);
};

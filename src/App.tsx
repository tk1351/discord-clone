import styles from "./App.module.css";
import { Chat } from "./components/Chat";
import { Sidebar } from "./components/Sidebar";

function App() {
	return (
		<div className={styles.container}>
			<Sidebar />
			<Chat />
		</div>
	);
}

export default App;

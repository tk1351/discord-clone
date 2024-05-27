import { addDoc, collection } from "firebase/firestore";
import { ChangeEventHandler, FC, FormEventHandler, useState } from "react";
import { Navigate } from "react-router-dom";
import styles from "./App.module.css";
import { Chat } from "./components/Chat";
import { Sidebar } from "./components/Sidebar";
import { useAuth } from "./hooks/useAuth.tsx";
import { useCollection } from "./hooks/useCollection.tsx";
import { useDialog } from "./hooks/useDialog.tsx";
import { db } from "./lib/firebase.ts";
import { Channel } from "./types/channel.ts";

export const App: FC = () => {
	const { dialogRef, closeDialog } = useDialog();

	const [channelName, setChannelName] = useState("");

	const onChangeChannelNameInput: ChangeEventHandler<HTMLInputElement> = (
		event,
	) => {
		setChannelName(event.target.value);
	};

	const onSubmitChannelName: FormEventHandler<HTMLFormElement> = async (
		event,
	) => {
		event.preventDefault();

		if (channelName !== "") {
			await addDoc(collection(db, "channels"), {
				channelName,
			});
		}

		setChannelName("");
		closeDialog();
	};

	const { user } = useAuth();

	const { documents } = useCollection<Channel>("channels");

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
						channels={documents}
					/>
					<Chat />
				</div>
			)}
			<dialog ref={dialogRef}>
				<header>チャンネル追加</header>
				<form onSubmit={onSubmitChannelName}>
					<input
						value={channelName}
						placeholder="チャンネル名を入力してください"
						onChange={onChangeChannelNameInput}
					/>
					<button>追加</button>
				</form>
			</dialog>
		</>
	);
};

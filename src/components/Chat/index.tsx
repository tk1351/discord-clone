import {collection, onSnapshot, query, orderBy} from "firebase/firestore";
import { useAtom } from "jotai";
import {
	ChangeEventHandler,
	FC,
	FormEventHandler,
	useEffect,
	useState,
} from "react";
import {
	MdAddCircleOutline,
	MdCardGiftcard,
	MdEmojiEmotions,
	MdGif,
	MdHelp,
	MdNotifications,
	MdOutlineSearch,
	MdPeopleAlt,
	MdPushPin,
	MdSend,
} from "react-icons/md";
import { addMessage } from "../../lib/addDoc.ts";
import { db } from "../../lib/firebase.ts";
import { channelAtom, userAtom } from "../../store";
import { Message } from "../../types/chat.ts";
import styles from "./index.module.css";

export const Chat: FC = () => {
	const [inputValue, setInputValue] = useState("");
	const [messages, setMessages] = useState<Message[]>([]);

	const [channelInfo] = useAtom(channelAtom);
	const [user] = useAtom(userAtom);

	useEffect(() => {
		if (channelInfo) {
			const collectionRef = collection(
				db,
				"channels",
				channelInfo.id,
				"messages",
			);

			const collectionRefOrderBy = query(collectionRef, orderBy("timestamp", "asc"))

			onSnapshot(collectionRefOrderBy, (querySnapshot) => {
				setMessages(
					querySnapshot.docs.map((doc) => ({
						message: doc.data().message,
						timestamp: doc.data().timestamp,
						user: doc.data().user,
					})),
				);
			});
		}
	}, [channelInfo]);

	const onChangeChatInput: ChangeEventHandler<HTMLInputElement> = (event) => {
		setInputValue(event.target.value);
	};

	const sendMessage: FormEventHandler<HTMLFormElement> = async (event) => {
		event.preventDefault();

		if (channelInfo && user) {
			await addMessage(channelInfo, user, inputValue);
		}

		setInputValue("");
	};
	return (
		<>
			{channelInfo ? (
				<div className={styles.chat}>
					<header className={styles["chat-header"]}>
						<div className={styles["channel-name"]}>
							<h3>
								<span className={styles["channel-name-hash"]}>#</span>
								{channelInfo.channelName}
							</h3>
						</div>
						<div className={styles["chat-header-actions"]}>
							<MdNotifications />
							<MdPushPin />
							<MdPeopleAlt />
							<form>
								<input placeholder="検索" className={styles["search-input"]} />
								<MdOutlineSearch />
							</form>
							<MdSend />
							<MdHelp />
						</div>
					</header>
					<main className={styles["chat-message-container"]}>
						{messages.length === 0 && (
							<div className={styles["no-message"]}>メッセージはありません</div>
						)}
						<ul className={styles["chat-message-list"]}>
							{messages.map(({ message, timestamp, user }) => (
								<li
									className={styles["chat-message"]}
									key={message + timestamp}
								>
									<img
										src={user.photo ? user.photo : ""}
										alt=""
										className={styles["chat-message-avatar"]}
									/>
									<div className={styles["chat-message-info"]}>
										<h4>
											{user.displayName}
											<span className={styles.timestamp}>
												{new Date(timestamp?.toDate()).toLocaleString()}
											</span>
										</h4>
										<p>{message}</p>
									</div>
								</li>
							))}
						</ul>
					</main>
					<footer className={styles["chat-footer"]}>
						<MdAddCircleOutline />
						<form className={styles.form} onSubmit={sendMessage}>
							<input
								value={inputValue}
								placeholder={`#${channelInfo.channelName}へメッセージを送信`}
								className={styles["chat-input"]}
								onChange={onChangeChatInput}
							/>
							<button className={styles["submit-button"]}>送信</button>
						</form>
						<div className={styles["chat-input-icons"]}>
							<MdCardGiftcard />
							<MdGif />
							<MdEmojiEmotions />
						</div>
					</footer>
				</div>
			) : (
				<div className={styles.chat}></div>
			)}
		</>
	);
};

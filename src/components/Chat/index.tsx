import { FC } from "react";
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
import reactImage from "../../assets/react.svg";
import styles from "./index.module.css";

export const Chat: FC = () => {
	return (
		<div className={styles.chat}>
			<header className={styles["chat-header"]}>
				<div className={styles["channel-name"]}>
					<h3>
						<span className={styles["channel-name-hash"]}>#</span>React
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
				<div className={styles["chat-message"]}>
					<img
						src={reactImage}
						alt=""
						className={styles["chat-message-avatar"]}
					/>
					<div className={styles["chat-message-info"]}>
						<h4>
							Account Name<span className={styles.timestamp}>2024/01/01</span>
						</h4>
						<p>Magna veniam aute exercitation sint labore.</p>
					</div>
				</div>
				<div className={styles["chat-message"]}>
					<img
						src={reactImage}
						alt=""
						className={styles["chat-message-avatar"]}
					/>
					<div className={styles["chat-message-info"]}>
						<h4>
							Account Name<span className={styles.timestamp}>2024/01/01</span>
						</h4>
						<p>Magna veniam aute exercitation sint labore.</p>
					</div>
				</div>
				<div className={styles["chat-message"]}>
					<img
						src={reactImage}
						alt=""
						className={styles["chat-message-avatar"]}
					/>
					<div className={styles["chat-message-info"]}>
						<h4>
							Account Name<span className={styles.timestamp}>2024/01/01</span>
						</h4>
						<p>Magna veniam aute exercitation sint labore.</p>
					</div>
				</div>
			</main>
			<footer className={styles["chat-footer"]}>
				<MdAddCircleOutline />
				<form className={styles.form}>
					<input
						placeholder="#Reactへメッセージを送信"
						className={styles["chat-input"]}
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
	);
};

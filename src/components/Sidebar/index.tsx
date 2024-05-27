import { FC } from "react";
import {
	MdAdd,
	MdExpandMore,
	MdHeadphones,
	MdMic,
	MdSettings,
} from "react-icons/md";
import reactImage from "../../assets/react.svg";
import { useDialog } from "../../hooks/useDialog.tsx";
import { auth } from "../../lib/firebase.ts";
import { Channel } from "../../types/channel.ts";
import styles from "./index.module.css";

type Props = {
	uid: string;
	displayName: string;
	photo: string;
	channels: Channel[];
};

export const Sidebar: FC<Props> = ({ uid, displayName, photo, channels }) => {
	const { openDialog } = useDialog();
	const signOut = () => auth.signOut();

	const addChannel = () => {
		openDialog();
	};
	return (
		<div className={styles.sidebar}>
			{/* サーバー表示カラム */}
			<div className={styles["servers-column"]}>
				<div>
					<img className={styles["server-icon"]} src={reactImage} alt="" />
				</div>
				<div>
					<img className={styles["server-icon"]} src={reactImage} alt="" />
				</div>
			</div>
			{/* チャンネル表示カラム */}
			<div className={styles["channels-column"]}>
				<header className={styles["channels-column-header"]}>
					<h3>Discord</h3>
					<MdExpandMore />
				</header>
				<div className={styles.channels}>
					<div className={styles["channels-header-wrapper"]}>
						<MdExpandMore />
						<div className={styles["channels-header"]}>
							<p>プログラミングチャンネル</p>
							<button
								type="button"
								className={styles["add-button"]}
								onClick={addChannel}
							>
								<MdAdd />
							</button>
						</div>
					</div>
					<ul className={styles["channels-list"]}>
						{channels.map(({ id, channel }) => (
							<li key={id}>
								<h4 className={styles["channel-name"]}>
									<span className={styles["channel-hash"]}>#</span>
									{channel.channelName}
								</h4>
							</li>
						))}
					</ul>
				</div>
				<footer className={styles["channels-column-footer"]}>
					<div className={styles["account-info-wrapper"]}>
						<button
							type="button"
							className={styles["avatar-button"]}
							onClick={signOut}
						>
							<img src={photo} alt="" className={styles.avatar} />
						</button>
						<div className={styles["account-name-wrapper"]}>
							<h4 className={styles["account-name"]}>
								{displayName}
								<p className={styles.id}>#{uid}</p>
							</h4>
						</div>
					</div>
					<div className={styles.operations}>
						<MdMic />
						<MdHeadphones />
						<MdSettings />
					</div>
				</footer>
			</div>
		</div>
	);
};

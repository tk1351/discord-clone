import { useAtom } from "jotai";
import { FC } from "react";
import {
	MdAdd,
	MdExpandMore,
	MdHeadphones,
	MdMic,
	MdSettings,
} from "react-icons/md";
import reactImage from "../../assets/react.svg";
import { auth } from "../../lib/firebase.ts";
import { channelAtom } from "../../store";
import { Channel } from "../../types/channel.ts";
import styles from "./index.module.css";

type Props = {
	uid: string;
	displayName: string;
	photo: string;
	channels: Channel[];
	onClickAddButton: () => void;
};

export const Sidebar: FC<Props> = ({
	uid,
	displayName,
	photo,
	channels,
	onClickAddButton,
}) => {
	const [_channelInfo, setChannelInfo] = useAtom(channelAtom);
	const signOut = () => auth.signOut();

	const onClickChannelNameButton = (id: string, channelName: string) => {
		setChannelInfo({ id, channelName });
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
								onClick={onClickAddButton}
							>
								<MdAdd />
							</button>
						</div>
					</div>
					<ul className={styles["channels-list"]}>
						{channels.map(({ id, channel }) => (
							<li key={id}>
								<button
									type="button"
									className={styles["channel-name-button"]}
									onClick={() =>
										onClickChannelNameButton(id, channel.channelName)
									}
								>
									<h4 className={styles["channel-name"]}>
										<span className={styles["channel-hash"]}>#</span>
										{channel.channelName}
									</h4>
								</button>
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

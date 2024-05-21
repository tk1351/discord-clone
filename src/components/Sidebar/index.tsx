import { FC } from "react";
import { MdAdd, MdExpandMore, MdMic, MdHeadphones, MdSettings } from "react-icons/md";
import reactImage from "../../assets/react.svg";
import styles from "./index.module.css";

export const Sidebar: FC = () => {
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
							<button type="button" className={styles["add-button"]}>
								<MdAdd />
							</button>
						</div>
					</div>
					<ul className={styles["channels-list"]}>
						<li>
							<h4 className={styles["channel-name"]}>
								<span className={styles["channel-hash"]}>#</span>React
							</h4>
						</li>
						<li>
							<h4 className={styles["channel-name"]}>
								<span className={styles["channel-hash"]}>#</span>Vue
							</h4>
						</li>
						<li>
							<h4 className={styles["channel-name"]}>
								<span className={styles["channel-hash"]}>#</span>Svelte
							</h4>
						</li>
						<li>
							<h4 className={styles["channel-name"]}>
								<span className={styles["channel-hash"]}>#</span>Qwik
							</h4>
						</li>
					</ul>
				</div>
				<footer className={styles['channels-column-footer']}>
					<div>
						<img src={reactImage} alt="" />
						<div><h4>Account Name<span>#8162</span></h4></div>
					</div>
					<div><MdMic /><MdHeadphones /><MdSettings /></div>
				</footer>
			</div>
		</div>
	);
};

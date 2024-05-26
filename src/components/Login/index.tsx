import { signInWithPopup } from "firebase/auth";
import { useAtom } from "jotai";
import { FC, useEffect } from "react";
import { Navigate } from "react-router-dom";
import reactImage from "../../assets/react.svg";
import { auth, provider } from "../../lib/firebase.ts";
import { userAtom } from "../../store";
import styles from "./index.module.css";

export const Login: FC = () => {
	const [user, setUser] = useAtom(userAtom);

	const signIn = () => {
		signInWithPopup(auth, provider)
			.then(({ user }) =>
				setUser({
					uid: user.uid,
					photo: user.photoURL,
					displayName: user.displayName,
					email: user.email,
				}),
			)
			.catch((error) => console.error(error));
	};

	useEffect(() => {
		auth.onAuthStateChanged((loggedIn) => {
			if (loggedIn) {
				setUser({
					uid: loggedIn.uid,
					photo: loggedIn.photoURL,
					displayName: loggedIn.displayName,
					email: loggedIn.email,
				});
			}
			return;
		});
	}, [setUser]);

	if (user) {
		return <Navigate replace to="/" />;
	}

	return (
		<div className={styles.login}>
			<header className={styles.header}>
				<img className={styles.logo} src={reactImage} alt="" />
			</header>
			<button className={styles["login-button"]} onClick={signIn}>
				Login
			</button>
		</div>
	);
};

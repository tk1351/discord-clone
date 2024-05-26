import { signInWithPopup } from "firebase/auth";
import { FC } from "react";
import { Navigate } from "react-router-dom";
import reactImage from "../../assets/react.svg";
import { useAuth } from "../../hooks/useAuth.tsx";
import { auth, provider } from "../../lib/firebase.ts";
import styles from "./index.module.css";

export const Login: FC = () => {
	const { user, setUser } = useAuth();

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

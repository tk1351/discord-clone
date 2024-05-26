import { useAtom } from "jotai";
import { useEffect } from "react";
import { auth } from "../lib/firebase.ts";
import { userAtom } from "../store";

export const useAuth = () => {
	const [user, setUser] = useAtom(userAtom);

	useEffect(() => {
		auth.onAuthStateChanged((loggedIn) => {
			if (loggedIn) {
				setUser({
					uid: loggedIn.uid,
					photo: loggedIn.photoURL,
					displayName: loggedIn.displayName,
					email: loggedIn.email,
				});
			} else {
				setUser(null);
			}
		});
	}, [setUser]);

	return { user, setUser };
};

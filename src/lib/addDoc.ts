import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { ChannelState } from "../types/channel.ts";
import { User } from "../types/user.ts";
import { db } from "./firebase.ts";

export const addChannel = async (channelName: string) => {
	if (channelName !== "") {
		const collectionRef = collection(db, "channels");
		await addDoc(collectionRef, {
			channelName,
		});
	}
};

export const addMessage = async (
	channelInfo: ChannelState,
	user: User,
	message: string,
) => {
	if (channelInfo && user) {
		const collectionRef = collection(
			db,
			"channels",
			channelInfo.id,
			"messages",
		);
		await addDoc(collectionRef, {
			message,
			timestamp: serverTimestamp(),
			user,
		});
	}
};

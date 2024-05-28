import { type Timestamp } from "firebase/firestore";
import { User } from "./user.ts";

export type Message = {
	message: string;
	timestamp: Timestamp;
	user: User;
};

import { DocumentData } from "firebase/firestore";

export type Channel = {
	id: string;
	channel: DocumentData;
};

export type ChannelState = Pick<Channel, "id"> & {
	channelName: string;
};

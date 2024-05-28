import { atom } from "jotai";
import { ChannelState } from "../types/channel.ts";
import { User } from "../types/user.ts";

export const userAtom = atom<User | null>(null);

export const channelAtom = atom<ChannelState | null>(null);

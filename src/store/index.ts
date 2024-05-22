import { atom } from "jotai";
import { User } from "../types/user.ts";

export const userAtom = atom<User | null>(null);

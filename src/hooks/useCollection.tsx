import { collection, onSnapshot, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../lib/firebase.ts";

export const useCollection = <T,>(collectionPath: string) => {
	const [documents, setDocuments] = useState<T[]>([]);

	const q = query(collection(db, collectionPath));

	useEffect(() => {
		onSnapshot(q, (querySnapshot) => {
			setDocuments(
				querySnapshot.docs.map(
					(doc) => ({ id: doc.id, channel: doc.data() }) as T,
				),
			);
		});
	}, [q]);

	return { documents };
};

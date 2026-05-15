import db from "@/utils/firestore";
import { doc, getDoc, updateDoc } from "firebase/firestore";

export const getEmails = async (): Promise<string[]> => {
	try {
		const docRef = doc(db, "Emails", "tu18VqqXoNykfM83Az40");
		const docSnap = await getDoc(docRef);

		if (docSnap.exists()) {
			return docSnap.data().emails || [];
		} else {
			throw new Error("Document not found");
		}
	} catch (error) {
		console.error("Error retrieving document from Firestore:", error);
		throw new Error("Internal Server Error");
	}
};

export const addEmail = async (email: string): Promise<void> => {
	try {
		const docRef = doc(db, "Emails", "tu18VqqXoNykfM83Az40");
		const docSnap = await getDoc(docRef);

		if (docSnap.exists()) {
			let docEmails = docSnap.data().emails || [];

			if (docEmails.length === 1 && docEmails[0] === "") {
				docEmails[0] = email;
			} else {
				docEmails.push(email);
			}

			await updateDoc(docRef, { emails: docEmails });
		} else {
			throw new Error("Document not found");
		}
	} catch (error) {
		console.error("Error updating document in Firestore:", error);
		throw new Error("Internal Server Error");
	}
};

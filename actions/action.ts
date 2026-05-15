// submitEmail.ts

import { addEmail } from "./firestoreService";

export const submitEmail = async (email: string): Promise<void> => {
	try {
		await addEmail(email);
	} catch (error: any) {
		throw new Error(error.message || "Error submitting email");
	}
};

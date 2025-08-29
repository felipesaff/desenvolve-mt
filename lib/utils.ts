import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function personWasFound(dataLocalizacao: string | null) {
	return dataLocalizacao ? "LOCALIZADO" : "DESAPARECIDO";
}

export const formatDate = (dateString: string) => {
	return new Date(dateString).toLocaleDateString("pt-BR", {
		day: "2-digit",
		month: "long",
		year: "numeric",
	});
};

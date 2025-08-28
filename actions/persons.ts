import "@/lib/axios-config";
import { IPaginatedResponse } from "@/types/pagination";
import { IPessoaDesaparecida } from "@/types/person";
import axios from "axios";

export async function getPersons(filters: {
	nome?: string;
	faixaIdadeInicial?: number;
	faixaIdadeFinal?: number;
	sexo?: "MASCULINO" | "FEMININO";
	pagina: number;
	porPagina: number;
	status?: "DESAPARECIDO" | "LOCALIZADO";
}) {
	const searchParams = Object.entries(filters)
		.map(
			([key, value]) =>
				`${encodeURIComponent(key)}=${encodeURIComponent(value)}`
		)
		.join("&");
	const { data } = await axios.get<IPaginatedResponse<IPessoaDesaparecida>>(
		`/pessoas/aberto/filtro?${searchParams}`
	);
	return data;
}

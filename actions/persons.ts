import api from "@/lib/axios-config";
import { IPaginatedResponse } from "@/types/pagination";
import { IPessoaDesaparecida } from "@/types/person";

export async function getPersons(filters: {
	nome?: string;
	faixaIdadeInicial?: number;
	faixaIdadeFinal?: number;
	sexo?: "MASCULINO" | "FEMININO";
	pagina: number;
	porPagina: number;
	status?: "DESAPARECIDO" | "LOCALIZADO";
}) {
	const { data } = await api.get<IPaginatedResponse<IPessoaDesaparecida>>(
		`/pessoas/aberto/filtro`,
		{
			params: { ...filters, status: "DESAPARECIDO" },
		}
	);
	return data;
}

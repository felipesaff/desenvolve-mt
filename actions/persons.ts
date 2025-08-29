import api from "@/lib/axios-config";
import { IPersonFilters } from "@/types/filters";
import { IPaginatedResponse } from "@/types/pagination";
import { IPessoaDesaparecida } from "@/types/person";

export async function getPersons(filters: IPersonFilters) {
	const { data } = await api.get<IPaginatedResponse<IPessoaDesaparecida>>(
		`/pessoas/aberto/filtro`,
		{
			params: filters,
		}
	);
	return data;
}

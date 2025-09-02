import api from "@/lib/axios-config";
import { IPersonFilters } from "@/types/filters";
import { IPaginatedResponse } from "@/types/pagination";
import {
	IPersonAdditionalInfomation,
	IPessoaDesaparecida,
} from "@/types/person";

export async function getPersons(filters: IPersonFilters) {
	const { data } = await api.get<IPaginatedResponse<IPessoaDesaparecida>>(
		`/pessoas/aberto/filtro`,
		{
			params: { ...filters, porPagina: 12 },
		}
	);
	return data;
}

export async function getPersonById(id: string) {
	const { data } = await api.get<IPessoaDesaparecida>(`/pessoas/${id}`);
	return data;
}

export async function addPersonInformation(
	params: IPersonAdditionalInfomation,
	anexos?: FileList
): Promise<IPessoaDesaparecida> {
	const { data } = await api.post<IPessoaDesaparecida>(
		"/ocorrencias/informacoes-desaparecido",
		{ anexos },
		{
			headers: {
				"Content-Type": "multipart/form-data",
			},
			params,
		}
	);
	return data;
}

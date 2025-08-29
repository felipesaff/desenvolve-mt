export interface IPersonFilters {
	nome: string;
	status: "DESAPARECIDO" | "LOCALIZADO";
	sexo: "MASCULINO" | "FEMININO";
	pagina: number;
	porPagina: number;
}

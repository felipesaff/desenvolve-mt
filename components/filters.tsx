"use client";
import { Filter, Search } from "lucide-react";
import { Input } from "./ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "./ui/select";
import { useState } from "react";

export function Filters() {
	const [filters, setFilters] = useState({
		nome: "",
		faixaIdadeInicial: 0,
		faixaIdadeFinal: 0,
		sexo: "all",
		status: "all",
		pagina: 1,
		porPagina: 10,
	});
	return (
		<div className="mb-8 space-y-4 w-full">
			<div className="flex items-center gap-2 text-lg font-semibold text-foreground">
				<Filter className="h-5 w-5" />
				Filtros de Busca
			</div>

			<div className="flex flex-wrap items-center gap-2">
				<div className="relative col-span-full md:col-span-1">
					<Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
					<Input
						placeholder="Buscar por nome..."
						value={filters.nome}
						onChange={(e) => setFilters({ ...filters, nome: e.target.value })}
						className="pl-10 bg-white"
					/>
				</div>

				<Select
					value={filters.status}
					onValueChange={(value) => setFilters({ ...filters, status: value })}
				>
					<SelectTrigger>
						<SelectValue placeholder="Status" />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="all">Todos os status</SelectItem>
						<SelectItem value="DESAPARECIDA">Desaparecida</SelectItem>
						<SelectItem value="LOCALIZADA">Localizada</SelectItem>
					</SelectContent>
				</Select>

				<Select
					value={filters.sexo}
					onValueChange={(value) => setFilters({ ...filters, sexo: value })}
				>
					<SelectTrigger>
						<SelectValue placeholder="Sexo" />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="all">Ambos os sexos</SelectItem>
						<SelectItem value="Masculino">Masculino</SelectItem>
						<SelectItem value="Feminino">Feminino</SelectItem>
					</SelectContent>
				</Select>
			</div>
		</div>
	);
}

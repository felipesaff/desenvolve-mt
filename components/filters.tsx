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
import { Form, FormControl, FormField, FormItem } from "./ui/form";
import { useForm } from "react-hook-form";
import { Button } from "./ui/button";
import { IPersonFilters } from "@/types/filters";

export function Filters({ filters }: { filters: IPersonFilters }) {
	const form = useForm<IPersonFilters>({
		defaultValues: {
			nome: filters.nome,
			sexo: filters.sexo,
			status: filters.status,
		},
	});

	return (
		<div className="mb-8 space-y-4 w-full">
			<div className="flex items-center gap-2 text-lg font-semibold text-foreground">
				<Filter className="h-5 w-5" />
				Filtros de Busca
			</div>

			<Form {...form}>
				<form className="flex flex-wrap items-center gap-2">
					<FormField
						control={form.control}
						name="nome"
						render={({ field }) => (
							<FormItem className="relative col-span-full md:col-span-1">
								<Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
								<Input
									{...field}
									placeholder="Buscar por nome..."
									onChange={(e) => field.onChange(e.target.value)}
									className="pl-10 bg-white"
								/>
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="status"
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<Select {...field} onValueChange={field.onChange}>
										<SelectTrigger className="bg-card">
											<SelectValue placeholder="Status" />
										</SelectTrigger>
										<SelectContent>
											<SelectItem value="all">Todos os status</SelectItem>
											<SelectItem value="DESAPARECIDO">Desaparecida</SelectItem>
											<SelectItem value="LOCALIZADO">Localizada</SelectItem>
										</SelectContent>
									</Select>
								</FormControl>
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="sexo"
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<Select {...field} onValueChange={field.onChange}>
										<SelectTrigger className="bg-card">
											<SelectValue placeholder="Sexo" />
										</SelectTrigger>
										<SelectContent>
											<SelectItem value="all">Ambos os sexos</SelectItem>
											<SelectItem value="MASCULINO">Masculino</SelectItem>
											<SelectItem value="FEMININO">Feminino</SelectItem>
										</SelectContent>
									</Select>
								</FormControl>
							</FormItem>
						)}
					/>

					<Button variant={"default"} type="submit">
						Buscar
					</Button>
				</form>
			</Form>
		</div>
	);
}

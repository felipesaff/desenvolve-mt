"use client";
import { IPessoaDesaparecida } from "@/types/person";
import { lazy, use } from "react";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import { formatDate, personWasFound } from "@/lib/utils";
import { Badge } from "./ui/badge";
import { Calendar, MapPin, User } from "lucide-react";
const PersonFormDialog = lazy(() =>
	import("./person-form-dialog").then((m) => ({ default: m.PersonFormDialog }))
);

export function PersonDetails({
	person: personProp,
}: {
	person: Promise<IPessoaDesaparecida>;
}) {
	const person = use(personProp);
	return (
		<Card>
			<CardContent className="md:p-8">
				<div className="flex flex-col items-center gap-8">
					{person.urlFoto ? (
						<Image
							src={person.urlFoto}
							alt={`Foto de ${person.nome}`}
							width={500}
							height={500}
						/>
					) : (
						<div className="h-60 rounded-md flex justify-center items-center bg-muted-foreground">
							<p>Sem foto</p>
						</div>
					)}

					<div className="flex-1 space-y-4">
						<div className="flex flex-col items-center lg:items-start">
							<h1 className="text-2xl font-bold text-balance text-center">
								{person.nome}
							</h1>

							<Badge
								className="mb-6"
								variant={
									person.ultimaOcorrencia.dataLocalizacao
										? "default"
										: "destructive"
								}
							>
								{personWasFound(person.ultimaOcorrencia.dataLocalizacao)}
							</Badge>

							<div className="grid grid-cols-2 gap-y-2">
								<div className="flex items-center justify-start gap-2">
									<User size={22} className=" text-muted-foreground" />
									<span>{person.sexo}</span>
								</div>

								<div className="flex items-center justify-start gap-2">
									<Calendar size={22} className=" text-muted-foreground" />
									<span>{person.idade} anos</span>
								</div>

								<div className="flex items-start col-span-full md:col-span-1 justify-start gap-x-2">
									<MapPin size={22} className="text-muted-foreground" />
									<span>
										{person.ultimaOcorrencia.localDesaparecimentoConcat}
									</span>
								</div>

								<div className="flex items-start col-span-full md:col-span-1 justify-start gap-2">
									<Calendar size={22} className="text-muted-foreground" />
									<span>
										{`${personWasFound(
											person.ultimaOcorrencia.dataLocalizacao
										)} EM ${
											person.ultimaOcorrencia.dataLocalizacao
												? formatDate(person.ultimaOcorrencia.dataLocalizacao)
												: formatDate(person.ultimaOcorrencia.dtDesaparecimento)
										}`}
									</span>
								</div>
							</div>
						</div>

						<div>
							<h3 className="text-xl font-semibold mb-2">Última vestimenta</h3>
							<p className="text-muted-foreground leading-relaxed">
								{person.ultimaOcorrencia.ocorrenciaEntrevDesapDTO
									?.vestimentasDesaparecido ?? "N/A"}
							</p>
						</div>

						<div>
							<h3 className="text-xl font-semibold mb-2">Última informação</h3>
							<p className="text-muted-foreground leading-relaxed">
								{person.ultimaOcorrencia.ocorrenciaEntrevDesapDTO?.informacao ??
									"N/A"}
							</p>
						</div>

						<div className="pt-4">
							<PersonFormDialog ocoId={person.ultimaOcorrencia.ocoId} />
						</div>
					</div>
				</div>
			</CardContent>
		</Card>
	);
}

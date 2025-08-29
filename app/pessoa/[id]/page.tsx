import { getPersonById } from "@/actions/persons";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { formatDate, personWasFound } from "@/lib/utils";
import { Calendar, MapPin, Plus, User } from "lucide-react";
import Image from "next/image";

export default async function Page({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const { id } = await params;
	const person = await getPersonById(id);

	return (
		<main className="flex flex-col items-center p-4 md:p-6 font-sans space-y-4">
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
													: formatDate(
															person.ultimaOcorrencia.dtDesaparecimento
													  )
											}`}
										</span>
									</div>
								</div>
							</div>

							<div>
								<h3 className="text-xl font-semibold mb-2">
									Última vestimenta
								</h3>
								<p className="text-muted-foreground leading-relaxed">
									{person.ultimaOcorrencia.ocorrenciaEntrevDesapDTO
										?.vestimentasDesaparecido ?? "N/A"}
								</p>
							</div>

							<div>
								<h3 className="text-xl font-semibold mb-2">
									Última informação
								</h3>
								<p className="text-muted-foreground leading-relaxed">
									{person.ultimaOcorrencia.ocorrenciaEntrevDesapDTO
										?.informacao ?? "N/A"}
								</p>
							</div>

							<div className="pt-4">
								<Button className="w-full lg:w-auto" size="lg">
									<Plus className="h-5 w-5 mr-2" />
									Possui alguma informação? Clique aqui
								</Button>
							</div>
						</div>
					</div>
				</CardContent>
			</Card>
		</main>
	);
}

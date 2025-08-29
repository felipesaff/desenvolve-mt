import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { IPessoaDesaparecida } from "@/types/person";
import Image from "next/image";
import { Badge } from "./ui/badge";
import { Calendar, MapPin } from "lucide-react";
import Link from "next/link";
import { formatDate } from "@/lib/utils";

export function PersonCard({ person }: { person: IPessoaDesaparecida }) {
	return (
		<Link href={`/pessoa/${person.id}`}>
			<Card className="overflow-hidden shadow-card transition-shadow hover:shadow-lg h-full">
				<CardHeader>
					<div className="flex items-start justify-between">
						<div className="flex items-center gap-3">
							{person.urlFoto ? (
								<Image
									src={person.urlFoto}
									alt={`Foto de ${person.nome}`}
									width={500}
									height={500}
									className="w-16 h-16 rounded-full"
								/>
							) : (
								<div className="w-16 h-16 rounded-full bg-muted-foreground" />
							)}
							<div>
								<CardTitle>{person.nome}</CardTitle>
								<p className="text-sm text-muted-foreground">
									{person.idade} anos • {person.sexo}
								</p>
							</div>
						</div>
						<Badge
							variant={
								person.ultimaOcorrencia.dataLocalizacao
									? "default"
									: "destructive"
							}
							className="shrink-0"
						>
							{person.ultimaOcorrencia.dataLocalizacao
								? "Localizado"
								: "Desaparecido"}
						</Badge>
					</div>
				</CardHeader>
				<CardContent className="space-y-3">
					<div className="flex items-center gap-2 text-sm text-muted-foreground">
						<Calendar className="w-4 h-4" />
						{person.ultimaOcorrencia.dataLocalizacao ? (
							<span>
								Encontrado em{" "}
								{formatDate(person.ultimaOcorrencia.dataLocalizacao)}
							</span>
						) : (
							<span>
								Desaparecido em{" "}
								{formatDate(person.ultimaOcorrencia.dtDesaparecimento)}
							</span>
						)}
					</div>

					<div className="flex items-center gap-2 text-sm text-muted-foreground">
						<MapPin className="w-4 h-4" />
						<span>{person.ultimaOcorrencia.localDesaparecimentoConcat}</span>
					</div>
				</CardContent>
			</Card>
		</Link>
	);
}

import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "./ui/card";
import { IPessoaDesaparecida } from "@/types/person";
import Image from "next/image";
import { Badge } from "./ui/badge";

export function PersonCard({ person }: { person: IPessoaDesaparecida }) {
	return (
		<Card className="w-sm h-full">
			<CardHeader>
				<CardTitle>{person.nome}</CardTitle>
				<CardDescription>
					{person.sexo} - {person.idade} ANOS
				</CardDescription>
			</CardHeader>
			<CardContent>
				{person.urlFoto ? (
					<Image
						src={person.urlFoto}
						alt={person.nome}
						width={200}
						height={200}
					/>
				) : (
					<p>Nenhuma imagem disponível</p>
				)}
			</CardContent>
			<CardFooter className="flex-col gap-2">
				<Badge
					variant={
						person.ultimaOcorrencia.dataLocalizacao ? "default" : "destructive"
					}
				>
					{person.ultimaOcorrencia.dataLocalizacao
						? `LOCALIZADO em ${person.ultimaOcorrencia.dataLocalizacao}`
						: "Desaparecido"}
				</Badge>
			</CardFooter>
		</Card>
	);
}

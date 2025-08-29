import { getPersons } from "@/actions/persons";
import { Filters } from "@/components/filters";
import { PersonCard } from "@/components/person-card";

export default async function Home() {
	const paginatedPersons = await getPersons({ pagina: 1, porPagina: 10 });
	return (
		<div className="font-sans space-y-4 items-center min-h-screen">
			<Header />
			<main className="flex flex-col items-center px-6">
				<Filters />
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 w-full">
					{paginatedPersons.content.map((person) => (
						<PersonCard key={person.id} person={person} />
					))}
				</div>
			</main>
		</div>
	);
}

function Header() {
	return (
		<header className="flex bg-card w-full flex-col items-start px-6 py-4">
			<h1 className="text-3xl font-bold text-card-foreground">
				Pessoas Desaparecidas
			</h1>
			<p className="text-muted-foreground mt-1">
				Ajude a encontrar pessoas desaparecidas em todo o Mato Grosso
			</p>
		</header>
	);
}

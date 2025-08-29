import { getPersons } from "@/actions/persons";
import { PersonCard } from "@/components/person-card";

export default async function Home() {
	const paginatedPersons = await getPersons({ pagina: 1, porPagina: 10 });
	return (
		<div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
			<main className="flex flex-col row-start-2 items-center sm:items-start">
				<h1 className="text-3xl font-bold">Página Principal</h1>

				<div className="flex flex-row flex-wrap gap-4 mt-4">
					{paginatedPersons.content.map((person) => (
						<PersonCard key={person.id} person={person} />
					))}
				</div>
			</main>
		</div>
	);
}

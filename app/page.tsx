import { getPersons } from "@/actions/persons";
import { Filters } from "@/components/filters";
import { PersonCard } from "@/components/person-card";
import { PersonsPagination } from "@/components/persons-pagination";
import { IPersonFilters } from "@/types/filters";

export default async function Home({
	searchParams,
}: {
	searchParams: Promise<IPersonFilters>;
}) {
	const filters = await searchParams;
	const paginatedPersons = await getPersons(filters);
	return (
		<main className="flex flex-col items-center p-6 font-sans space-y-4">
			<Filters filters={filters} />
			<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 mt-4 w-full">
				{paginatedPersons.content.map((person) => (
					<PersonCard key={person.id} person={person} />
				))}
			</div>
			<PersonsPagination
				searchParams={await searchParams}
				pagination={paginatedPersons}
			/>
		</main>
	);
}

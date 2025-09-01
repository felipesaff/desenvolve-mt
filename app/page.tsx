import { getPersons } from "@/actions/persons";
import { Filters } from "@/components/filters";
import { PersonsList } from "@/components/persons-list";
import { PersonsPagination } from "@/components/persons-pagination";
import { IPersonFilters } from "@/types/filters";
import { Suspense } from "react";

export default async function Home({
	searchParams,
}: {
	searchParams: Promise<IPersonFilters>;
}) {
	const filters = await searchParams;
	const paginatedPersons = getPersons(filters);
	return (
		<main className="flex flex-col items-center p-6 font-sans space-y-4">
			<Filters filters={filters} />
			<Suspense fallback={<div>Loading...</div>}>
				<PersonsList persons={paginatedPersons} />
			</Suspense>
			<div className="w-full overflow-x-auto">
				<PersonsPagination
					searchParams={filters}
					pagination={paginatedPersons}
				/>
			</div>
		</main>
	);
}

import { IPessoaDesaparecida } from "@/types/person";
import { PersonCard } from "./person-card";
import { use } from "react";
import { IPaginatedResponse } from "@/types/pagination";

export function PersonsList({
	persons,
}: {
	persons: Promise<IPaginatedResponse<IPessoaDesaparecida>>;
}) {
	const allPersons = use(persons);
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 mt-4 w-full">
			{allPersons.content.map((person) => (
				<PersonCard key={person.id} person={person} />
			))}
		</div>
	);
}

import { getPersonById } from "@/actions/persons";
import { Loader } from "@/components/loader";
import { PersonDetails } from "@/components/person-details";
import { Suspense } from "react";

export default async function Page({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const { id } = await params;
	const person = getPersonById(id);

	return (
		<main className="flex flex-col items-center p-4 md:p-6">
			<Suspense fallback={<Loader />}>
				<PersonDetails person={person} />
			</Suspense>
		</main>
	);
}

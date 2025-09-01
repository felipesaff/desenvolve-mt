import { getPersonById } from "@/actions/persons";
import { Loader } from "@/components/loader";
import { PersonDetails } from "@/components/person-details";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { formatDate, personWasFound } from "@/lib/utils";
import { Calendar, MapPin, Plus, User } from "lucide-react";
import Image from "next/image";
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

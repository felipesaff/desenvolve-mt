"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Error({ reset }: { reset: () => void }) {
	return (
		<div className="w-full flex flex-col items-center justify-center bg-blue-500 min-h-full">
			<h2 className="text-card text-2xl">
				Algo deu errado nos nossos servidores
			</h2>
			<Image
				src={"/500-error.png"}
				alt="500"
				width={500}
				height={500}
				className={"w-96"}
				priority
			/>
			<Button onClick={() => reset()}>Tentar novamente</Button>
		</div>
	);
}

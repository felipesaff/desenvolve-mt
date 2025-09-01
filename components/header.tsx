import Image from "next/image";

export function Header() {
	return (
		<header className="flex w-full flex-col md:flex-row items-center px-6 py-4 bg-gray-900">
			<Image
				src={"/pcmt-logo.png"}
				alt="Logo"
				width={500}
				height={500}
				className="w-32"
			/>
			<div>
				<h1 className="text-3xl font-bold text-card">Pessoas Desaparecidas</h1>
				<p className="text-muted mt-1">
					Ajude a encontrar pessoas desaparecidas em todo o Mato Grosso
				</p>
			</div>
		</header>
	);
}

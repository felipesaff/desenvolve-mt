"use client";
import { useForm } from "react-hook-form";
import { Button } from "./ui/button";
import {
	Dialog,
	DialogTrigger,
	DialogContent,
	DialogHeader,
	DialogFooter,
	DialogTitle,
	DialogDescription,
	DialogClose,
} from "./ui/dialog";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Plus } from "lucide-react";
import { addPersonInformation } from "@/actions/persons";
import { toast } from "sonner";

const ACCEPTED_IMAGE_TYPES = [
	"image/jpeg",
	"image/jpg",
	"image/png",
	"image/webp",
];

const formSchema = z.object({
	informacao: z
		.string()
		.min(10, "A informação precisa ter no mínimo 10 caracteres"),
	descricao: z
		.string()
		.min(10, "A descrição precisa ter no mínimo 10 caracteres"),
	data: z.string(),
	files: z
		.custom<FileList>()
		.optional()
		.refine(
			(files) =>
				Array.from(files || []).every((file) => file.size <= 1024 * 1024 * 5),
			"Tamanho máximo de 5MB por arquivo."
		)
		.refine(
			(files) =>
				Array.from(files || []).every((file) =>
					ACCEPTED_IMAGE_TYPES.includes(file.type)
				),
			"Apenas arquivos .jpg, .jpeg, .png e .webp são aceitos."
		),
});

export function PersonFormDialog({ ocoId }: { ocoId: number }) {
	const form = useForm({
		defaultValues: {
			informacao: "",
			descricao: "",
			data: new Date().toISOString().split("T")[0],
			files: undefined as unknown as FileList,
		},
		resolver: zodResolver(formSchema),
	});

	async function onSubmit(values: z.infer<typeof formSchema>) {
		const res = await addPersonInformation(
			{
				data: values.data,
				informacao: values.informacao,
				descricao: values.descricao,
				ocoId: ocoId,
			},
			values.files
		);

		if (res.id) {
			toast.success("Informação adicionada com sucesso!", {
				description: "Obrigado pela colaboração!",
			});
		}
	}

	function handleChangeFiles(e: React.ChangeEvent<HTMLInputElement>) {
		if (e.target.files) {
			form.setValue("files", e.target.files);
		}
	}

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button className="w-full lg:w-auto" size="lg">
					<Plus className="h-5 w-5 mr-2" />
					Possui alguma informação? Clique aqui
				</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle>Adicionar informação</DialogTitle>
					<DialogDescription>
						Preencha os campos abaixo para adicionar uma informação à ocorrência
					</DialogDescription>
				</DialogHeader>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)}>
						<div className="grid gap-4">
							<FormField
								control={form.control}
								name="informacao"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Informação</FormLabel>
										<FormControl>
											<Input
												{...field}
												placeholder="Informação da ocorrência"
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>

							<FormField
								control={form.control}
								name="descricao"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Descrição</FormLabel>
										<FormControl>
											<Input {...field} placeholder="Descrição da ocorrência" />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>

							<FormField
								control={form.control}
								name="data"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Data</FormLabel>
										<FormControl>
											<Input
												{...field}
												type="date"
												value={String(field.value)}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>

							<FormField
								control={form.control}
								name="files"
								render={() => (
									<FormItem>
										<FormLabel>Arquivos</FormLabel>
										<FormControl>
											<Input
												onChange={handleChangeFiles}
												size={5}
												accept="image/*"
												type="file"
												multiple
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<DialogFooter>
								<DialogClose asChild>
									<Button variant="outline">Cancelar</Button>
								</DialogClose>
								<Button disabled={form.formState.isSubmitting} type="submit">
									{form.formState.isSubmitting
										? "Enviando..."
										: "Enviar informação"}
								</Button>
							</DialogFooter>
						</div>
					</form>
				</Form>
			</DialogContent>
		</Dialog>
	);
}

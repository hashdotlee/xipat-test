interface PageTitleProps {
	title: string;
}
export default function PageTitle({ title }: PageTitleProps) {
	return (
		<header className="py-4 px-8 border-b sticky top-0 bg-while backdrop-blur-sm">
			<title>{title} - Xipat Admin</title>
			<h1 className="text-2xl text-neutral-700 font-bold">{title}</h1>
		</header>
	)
}

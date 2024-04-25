interface PageTitleProps {
	title: string;
}
export default function PageTitle({ title }: PageTitleProps) {
	return (
		<header className="p-4 border-b">
			<title>{title} - Xipat Admin</title>
			<h1 className="text-3xl font-bold">{title}</h1>
		</header>
	)
}

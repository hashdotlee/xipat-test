import { ReactNode } from "react";

interface DialogProps {
	children: ReactNode;
	open: boolean;
	setOpen: (open: boolean) => void;
	sizes?: "sm" | "md" | "lg";
	title?: string;
}
export default function Dialog({ children, title, open, setOpen, sizes }: DialogProps) {
	return <div className="relative"

	>
	{ open && <div className="fixed inset-0 bg-black/50 z-40" onClick={() => setOpen(false)}></div>}
		<dialog className={`fixed top-1/2 left-1/2 bg-white rounded-md duration-150 shadow-lg p-4 z-50 translate-x-[-50%] translate-y-[-75%] scale-0
		${open ? "scale-100" : "scale-0"} w-screen lg:max-w-screen-lg max-w-[calc(100vw-2rem)] md:max-w-screen-md sm:max-w-screen-sm transition-transform transform origin-center
			`} open={open}>
			{children}
		</dialog>
	</div>
}

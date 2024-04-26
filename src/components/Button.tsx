import { ReactNode } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children?: ReactNode;
}

export default function Button({ children, className, ...props }: ButtonProps) {
	return <button {...props} className={`px-4 shadow-sm rounded-md py-2 border ${className}`}>
		{children}
	</button>
}

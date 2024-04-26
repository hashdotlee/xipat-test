export interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	label?: string;
}

export const FormInput = ({ label, className, ...props }: FormInputProps) => {
	return <div className="my-3">
		<label className="block font-semibold mb-2">{label}</label>
		<input {...props} className={`px-4 py-2 w-full border rounded-md ${className}`} />
	</div>
}

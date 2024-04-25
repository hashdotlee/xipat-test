export interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	label?: string;
}

export const FormInput = ({ label, ...props }: FormInputProps) => {
	return <div className="my-3">
		<label className="block">{label}</label>
		<input {...props} />
	</div>
}

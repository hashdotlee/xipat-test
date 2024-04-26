
interface BackgroundPickerProps {
	value?: string;
	onChange: (value: string) => void;
}

export default function BackgroundPicker({ value, onChange }: BackgroundPickerProps) {
	return <div>
		<label className="block font-semibold" htmlFor="bg">Background Color <small className="font-light">(pick color or input the hex code)</small></label>
		<div className="flex flex-col lg:flex-row lg:items-center gap-4">
			<input id="bg" className="px-4 py-2 border rounded-md" onChange={(e) => onChange(e.target.value)} value={value} />
			<input value={value} className="w-full md:w-32 border px-4 py-2 rounded-md" onChange={(e) => {
				onChange(e.target.value)
			}
			} type="color" />
		</div>
	</div>
}

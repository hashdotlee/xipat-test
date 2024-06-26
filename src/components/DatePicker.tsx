import { DayPicker } from "react-day-picker";

interface DatePickerProps {
	selected?: any;
	onSelect: (selected: any) => void;
}

export default function DatePicker({ selected, onSelect }: DatePickerProps) {
	return <div className="my-3 space-y-3">
		<label className="block font-semibold"> Date Range </label>
		<div className="mt-2 p-4 border rounded-md bg-white flex gap-2">
			{selected && selected.from && <div className=""><span className="font-semibold">From:</span> {selected.from.toLocaleDateString()}</div>}
			{selected && selected.to && <div className=""><span className="font-semibold">To:</span> {selected.to.toLocaleDateString()}</div>}
		</div>
		<div className="bg-white rounded-md p-4 border">
		<DayPicker
			mode="range"
			selected={selected}
			numberOfMonths={2}
			pagedNavigation
			onSelect={(val) => { onSelect(val) }}
		/>
		</div>
	</div>
}


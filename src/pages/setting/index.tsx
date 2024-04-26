import { useState } from "react";
import Button from "../../components/Button";
import DatePicker from "../../components/DatePicker";
import { FormInput } from "../../components/FormInput";
import PageTitle from "../../components/PageTitle";
import BackgroundPicker from "../../components/BackgroundPicker";



export default function Settings() {
	const [dirty, setDirty] = useState(false);
	const [selected, setSelected] = useState({ from: new Date(), to: new Date() });
	const [background, setBackground] = useState("#000");
	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const data = new FormData(e.currentTarget);
		data.append("background", background);
		data.append("date_range", JSON.stringify(selected));
	    setDirty(false);	
		console.log(data);
	}

	const onSelect = (selected: any) => {
		setSelected(selected);
		setDirty(true);
	}

	return <section>
		<PageTitle title="Settings" />
		<div className="p-8 rounded-md mx-auto w-full">
			<form
				onInput={() => setDirty(true)}
				onSubmit={(e) => onSubmit(e)} className="bg-gray-50 border rounded-md overflow-x-auto px-4">
				<FormInput name="title" label="Title" placeholder="Title" />
				<FormInput name="email" label="Email" type="email" placeholder="user@email.com" />
				<BackgroundPicker value={background} onChange={(value: string) => setBackground(value)} />
				<DatePicker
					selected={selected}
					onSelect={onSelect}
				/>

				<Button disabled={!dirty} className="bg-zinc-900 disabled:opacity-50 disabled:bg-white disabled:text-neutral-700 text-white hover:bg-zinc-900/80 transition duration-150 my-3">Update</Button>
			</form>
		</div>
	</section>
}

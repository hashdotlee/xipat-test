import { FormInput } from "../../components/FormInput";
import PageTitle from "../../components/PageTitle";

export default function Settings() {
	return <section>
		<PageTitle title="Settings" />
		<form>
			<FormInput label="Title" />
			<FormInput label="Email" type="email" />
			<FormInput label="Background Color" type="color" />
			<FormInput label="Active Date" type="date" />
		</form>
	</section>
}

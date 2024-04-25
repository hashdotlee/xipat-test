import { Outlet } from "react-router";
import HomeAside from "./components/aside";
import HomeFooter from "./components/footer";

export default function HomeLayout() {
	return (
		<div className="flex">
			<HomeAside />
			<main className="w-full">
				<Outlet />
				<HomeFooter />
			</main>
		</div>
	)
}

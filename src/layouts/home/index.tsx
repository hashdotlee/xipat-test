import { Outlet } from "react-router";
import HomeAside from "./components/aside";
import HomeFooter from "./components/footer";

export default function HomeLayout() {
	return (
		<div className="flex lg:pl-sidebar min-h-screen">
			<HomeAside />
			<main className="w-full min-h-screen pb-24 relative">
				<Outlet />
				<HomeFooter />
			</main>
		</div>
	)
}

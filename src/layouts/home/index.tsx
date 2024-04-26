import { Outlet, useLocation, useNavigate } from "react-router";
import HomeAside from "./components/aside";
import HomeFooter from "./components/footer";
import { useEffect } from "react";

export default function HomeLayout() {
	const location = useLocation();
	const navigate = useNavigate();
	useEffect(() => {
		if (location.pathname === "/") {
			navigate("/dashboard", { replace: true });
		}
	}, [location]);
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

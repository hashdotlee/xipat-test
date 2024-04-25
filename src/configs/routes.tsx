import HomeLayout from "../layouts/home";
import Dashboard from "../pages/dashboard";
import Revenue from "../pages/dashboard/revenue";
import Subscription from "../pages/dashboard/subscription";
import PostManagement from "../pages/post-management";
import Settings from "../pages/setting";

export type Route = {
	path: string;
	element: JSX.Element;
	name?: string;
	children?: Route[];
	hide?: boolean;
};

const routes: Route[] = [
	{
		path: "/",
		element: <HomeLayout />,
		name: "Home",
		hide: true,
		children: [
			{ path: "dashboard", name: 'Dashboard', element: <Dashboard />, children: [
				{ path: "subscription", hide: true, name: 'Subscriptions', element: <Subscription /> },
				{ path: "revenue", hide: true, name: 'Revenue', element: <Revenue/> },
			] },
			{ path: "post-management", name: 'Post Management', element: <PostManagement /> },
			{ path: "settings", name: 'Settings', element: <Settings /> },
		],

	},
];

export default routes

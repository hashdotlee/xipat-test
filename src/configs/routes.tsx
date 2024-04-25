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
	index?: boolean;
};

const routes: Route[] = [
	{
		path: "/",
		element: <HomeLayout />,
		hide: true,
		children: [
			{
				path: "dashboard", name: 'Dashboard', element: <Dashboard />
			},
			{ path: "post-management", name: 'Post Management', element: <PostManagement /> },
			{ path: "settings", name: 'Settings', element: <Settings /> },
		],

	},
];

export default routes

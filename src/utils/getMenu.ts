import { Route } from "../configs/routes";
import { MenuItem } from "../layouts/home/components/data";

export default function getMenu(routes: Route[]): MenuItem[] {
	return routes.map(route => ({
		name: route.name as string,
		path: route.path as string,
		children: route.children ? getMenu(route.children) : undefined,
		hide: route.hide
	}))
}

import { RouteObject } from "react-router-dom";
import { Route } from "../configs/routes";

export default function getRoute(routes: Route[]): RouteObject[] {
	return routes.map(route => ({
		path: route.path,
		element: route.element,
		index: route.index,
		children: route.children ? getRoute(route.children) : undefined,
	}))
}

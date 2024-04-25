import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./configs/routes";
import getRoute from "./utils/getRoute";

const router = createBrowserRouter(getRoute(routes));
console.log(getRoute(routes));

export default function App() {
	return <RouterProvider router={router} />
}



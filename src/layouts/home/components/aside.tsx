import { NavLink } from 'react-router-dom';
import routes from '../../../configs/routes';
import getMenu from '../../../utils/getMenu';
import type { MenuItem as MenuItemType } from './data.d';

export default function HomeAside() {
	const menu = getMenu(routes);
	return <aside className="py-2 w-sidebar hidden lg:block left-0 fixed top-0 flex-grow-1 flex-shrink-0 border-r min-h-screen bg-zinc-50">
		<nav>
			<ul className="space-y-2">
				{menu.map((menu,i) => <MenuItem key={i} menu={menu} />)}
			</ul>
		</nav>
	</aside>
}

const MenuItem = ({ menu }: { menu: MenuItemType }) => {
	if (menu.children) {
		if (menu?.hide) return <ul className="space-y-2">
			{menu.children.map((child,i) => <MenuItem key={i} menu={child} />)}
		</ul>
		return <li key={menu.path} className="w-full">
			<NavLink className={({ isActive }) => `${isActive ? "border-l-4 border-zinc-600 text-zinc-900 bg-zinc-100" : "border-l-4 border-transparent text-zinc-600"} px-6 w-full py-2 inline-block font-semibold text-xl`} to={menu.path}>{menu.name}</NavLink>
			{menu.children.filter(c => c.hide).length > 0 && <ul className="space-y-2">
				{menu.children.map((child,i) => <MenuItem key={i} menu={child} />)}
			</ul>}
		</li>
	}

	if (menu?.hide) return null

	return <li key={menu.path} className="w-full">
		<NavLink className={({ isActive }) => `${isActive ? "border-l-4 border-zinc-600 text-zinc-900 bg-zinc-100" : "border-l-4 border-transparent text-zinc-600"} px-6 py-2 w-full font-semibold text-xl inline-block`} to={menu.path}>{menu.name}</NavLink>
	</li>
}



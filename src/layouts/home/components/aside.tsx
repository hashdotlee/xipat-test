import { NavLink } from 'react-router-dom';
import routes from '../../../configs/routes';
import getMenu from '../../../utils/getMenu';
import type { MenuItem as MenuItemType } from './data.d';

export default function HomeAside() {
	const menu = getMenu(routes);
	return <aside className="py-4 flex-grow-1 flex-shrink-0 border-r min-h-screen bg-zinc-50">
		<nav>
			<ul>
				{menu.map(menu => <MenuItem key={menu.path} menu={menu} />)}
			</ul>
		</nav>
	</aside>
}

const MenuItem = ({ menu }: { menu: MenuItemType }) => {
	if (menu.children) {
		if (menu?.hide) return <ul>
			{menu.children.map(child => <MenuItem key={child.path} menu={child} />)}
		</ul>
		return <li key={menu.path} className="mb-4">
			<NavLink className={({ isActive }) => `${isActive ? "border-l-4 border-zinc-600 text-zinc-900" : "border-l-4 border-transparent text-zinc-600"} px-6 font-semibold text-xl`} to={menu.path}>{menu.name}</NavLink>
			{menu.children.filter(c => c.hide).length > 0 && <ul>
				{menu.children.map(child => <MenuItem key={child.path} menu={child} />)}
			</ul>}
		</li>
	}

	if (menu?.hide) return null

	return <li key={menu.path} className="mb-4 relative">
		<NavLink className={({ isActive }) => `${isActive ? "border-l-4 border-zinc-600 text-zinc-900" : "border-l-4 border-transparent text-zinc-600"} px-6 font-semibold text-xl`} to={menu.path}>{menu.name}</NavLink>
	</li>
}



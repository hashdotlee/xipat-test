import { NavLink, Outlet, useLocation } from 'react-router-dom';
import PageTitle from '../../components/PageTitle';

const tabs = [
	{
		name: 'Subscription',
		id: 'subscription',
		index: true,
	},
	{
		name: 'Revenue',
		id: 'revenue',
	},
];

export default function Dashboard() {
	return (
		<section>
			<PageTitle title={"Dashboard"} />
			<div className="p-8">
				<Tabs />
			</div>
		</section>
	);
}

function Tabs() {
	const isIndex = useLocation().pathname === '/dashboard';
	return (
		<div>
			<div className="flex gap-2">
				{tabs.map((tab) => (
					<NavLink to={`${tab.id}`} key={tab.id} className={({ isActive }) => `${(isActive) || (tab.index && isIndex) ? "bg-zinc-900 text-white" : "text-zinc-900/70"} text-white font-semibold px-4 py-2 border rounded-md`}>
						{tab.name}{' '}
					</NavLink>
				))}
			</div>
			<div className="bg-gray-50 my-4 border rounded-md">
				<Outlet />
			</div>
		</div>
	);
}


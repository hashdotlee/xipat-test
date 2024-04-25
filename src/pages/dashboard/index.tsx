import { NavLink, Outlet } from 'react-router-dom';
import PageTitle from '../../components/PageTitle';

const tabs = [
	{
		name: 'Subscription',
		id: 'subscription',
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
			<div className="container p-4">
				<Tabs />
			</div>
		</section>
	);
}

function Tabs() {
	return (
		<div>
			<div className="flex gap-2">
				{tabs.map((tab) => (
					<NavLink to={`/dashboard/${tab.id}`} key={tab.id} className={({ isActive }) => `${isActive ? "bg-zinc-900 text-white" : "text-zinc-900/70"} text-white font-semibold text-lg px-4 py-2 border rounded-md`}>
						{tab.name}{' '}
					</NavLink>
				))}
			</div>
			<div>
				<Outlet />
			</div>
		</div>
	);
}


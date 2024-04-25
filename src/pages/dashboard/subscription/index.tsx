import useSubscriptions from "../../../apis/useSubscriptions";
import LineChart from "../../../components/LineChart";

export default function Subscription() {
	const { subscriptions = [], loading } = useSubscriptions();
	if (loading || !subscriptions.length)
		return <div className="w-[1200px] h-[600px] flex items-center justify-center">Loading...</div>;
	return (
		<div className="flex w-full justify-center p-4 ">
			<LineChart title={"Total Subscriptions"} data={subscriptions} width={1200} height={600} />
		</div>
	);
}



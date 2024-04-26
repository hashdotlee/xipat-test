import { ParentSize } from "@visx/responsive";
import useSubscriptions from "../../../apis/useSubscriptions";
import LineChart from "../../../components/LineChart";

export default function Subscription() {
	const { subscriptions = [], loading } = useSubscriptions();
	if (loading || !subscriptions.length)
		return <div className="w-[1200px] h-[600px] flex items-center justify-center">Loading...</div>;
	return (
		<div className="flex w-full justify-center py-4 max-w-full w-screen h-[600px]">
			<ParentSize>
				{({ width, height }) => {
					return <LineChart title={"Total Subscriptions"} data={subscriptions} width={width} height={height} />
				}}
			</ParentSize>
		</div>
	);
}



import useRevenue from "../../../apis/useRevenue";
import BarChart from "../../../components/BarChart";

export default function Revenue() {
	const { revenue = [], isLoading } = useRevenue();
	if (isLoading || !revenue.length)
		return <div className="w-[600px] h-[600px] flex items-center justify-center">Loading...</div>;
	return (
		<div className="flex w-full justify-center p-4 ">
			<BarChart title={"Annual Revenue"} data={revenue} width={1200} height={600} />
		</div>
	);
}

import useRevenue from "../../../apis/useRevenue";
import BarChart from "../../../components/BarChart";
import { ParentSize, useParentSize } from '@visx/responsive';

export default function Revenue() {
	const { revenue = [], isLoading } = useRevenue();
	if (isLoading || !revenue.length)
		return <div className="w-[600px] h-[600px] flex items-center justify-center">Loading...</div>;
	return (
		<div className="flex w-full justify-center py-4 max-w-full w-screen h-[600px]">
			<ParentSize>
				{({ width, height }) =>
					<BarChart title={"Annual Revenue"} data={revenue} width={width} height={height} />
				}
			</ParentSize>
		</div>
	);
}

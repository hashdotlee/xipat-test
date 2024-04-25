import { AxisBottom, AxisLeft } from '@visx/axis';
import { GridRows } from '@visx/grid';
import { Group } from '@visx/group';
import { scaleLinear, scaleTime } from '@visx/scale';
import { Bar } from '@visx/shape';
import { Text } from '@visx/text';
import { useMemo } from 'react';


export type BarChartData = {
	date: Date;
	value: number;
};

export type BarsProps = {
	width: number;
	height: number;
	data: BarChartData[];
	title?: string;
}


export default function BarChart({ width = 400, height = 400, data, title }: BarsProps) {
	const getX = (d: BarChartData) => d.date;
	const getY = (d: BarChartData) => d.value;

	const margin = 60;

	const xMax = width - margin * 2;
	const yMax = height - margin * 2;

	const xScale = useMemo(() => scaleTime<number>({
		range: [0, xMax],
		round: true,
		domain: [new Date('2012-12-1'), new Date('2014-1-1')] as [Date, Date],
	}), [xMax]);

	const yScale = useMemo(() => scaleLinear<number>({
		range: [yMax, 0],
		round: true,
		domain: [0, 220],
	}), [yMax]);

	return width < 10 ? null : (
		<svg width={width} height={height}>
			<Group left={0} top={0}>
				{title && <Text textAnchor="middle" x={xMax / 2} y={margin / 2} fontSize={18} style={{ fontWeight: "bold" }}>
					{title}
				</Text>}
				<GridRows scale={yScale} width={xMax} height={yMax} top={margin} left={margin} stroke="#e0e0e0" />
				<AxisLeft scale={yScale} left={margin} top={margin} numTicks={10} />
				<AxisBottom
					scale={xScale}
					top={height - margin}
					left={margin}
					numTicks={12}
					tickLabelProps={{
						fill: '#000',
						fontSize: 11,
						textAnchor: 'start',
					}}
				/>

				<Group left={margin} top={margin}>
					{data.map(d => {
						const x = getX(d);
						const barWidth = xMax / data.length - 25;
						const barHeight = yMax - (yScale(getY(d)) ?? 0);
						const barX = (xScale(x) ?? 0) - barWidth / 2;
						const barY = yMax - barHeight;
						return (
							<Bar
								key={`bar-${x}`}
								x={barX}
								y={barY}
								width={barWidth}
								height={barHeight}
								fill="#000"
							/>
						);
					})}

				</Group>
			</Group>
		</svg>
	);
}

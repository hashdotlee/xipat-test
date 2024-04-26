import { AxisBottom, AxisLeft } from '@visx/axis';
import { Group } from '@visx/group';
import { MarkerCircle } from '@visx/marker';
import { scaleLinear, scaleTime } from '@visx/scale';
import { LinePath } from '@visx/shape';
import { extent } from '@visx/vendor/d3-array';
import { useCallback } from 'react';
import { GridRows } from '@visx/grid';
import { curveBasis } from '@visx/curve'
import { Text } from '@visx/text';
import { ScaleSVG } from '@visx/responsive';

export type DateValue = {
	date: Date;
	value: number;
};

export type LineChartData = DateValue[];

export type CurveProps = {
	width: number;
	height: number;
	data: LineChartData[];
	title?: string;
};

export default function LineChart({ width = 400, title, height = 400, data }: CurveProps) {
	// data accessors
	const getX = useCallback((d: DateValue) => d.date, []);
	const getY = useCallback((d: DateValue) => d.value, []);

	const allData = data.flat();

	// scales
	const xScale = useCallback(() => scaleTime<number>({
		domain: extent(allData, getX) as [Date, Date],
	}), [allData, getX])();

	const yScale = useCallback(() => scaleLinear<number>({
		domain: extent(allData, getY) as [number, number],
	}), [])();

	// bounds
	const margin = 60;
	const maxWidth = width - margin * 2;
	const maxHeight = height - margin * 2;

	// update scale output ranges
	xScale.range([0, maxWidth]);
	yScale.range([maxHeight, 0]);

	const colors = ["#4793AF", "#FFC470", "#DD5746", "#8B322C"];

	return (
		<div>
			<ScaleSVG width={width} height={height}>
				<MarkerCircle id="marker-circle" fill="#333" size={2} refX={2} />
				{width > 8 &&
					<Group top={0} left={0}>
						{title && <Text textAnchor="middle" x={maxWidth / 2} y={margin / 2} fontSize={18} style={{ fontWeight: "bold" }}>
							{title}
						</Text>}
						<GridRows scale={yScale} width={maxWidth} height={maxHeight} top={margin} left={margin} stroke="#e0e0e0" />
						<AxisLeft scale={yScale} left={margin} top={margin} numTicks={7} />
						<AxisBottom
							scale={xScale}
							top={height - margin}
							left={margin}
							numTicks={7}
						/>
						<Group left={margin} top={margin}>
							{data.map((line, i) => (
								<LinePath<DateValue>
									key={i}
									curve={curveBasis}
									data={line}
									x={(d) => xScale(getX(d)) ?? 0}
									y={(d) => yScale(getY(d)) ?? 0}
									stroke={colors[i % colors.length]}
									strokeWidth={3}
									strokeOpacity={1}
									shapeRendering="geometricPrecision"
									markerMid="url(#marker-circle)"
								/>
							))}
						</Group>

					</Group>
				}
			</ScaleSVG>
		</div>
	);
}

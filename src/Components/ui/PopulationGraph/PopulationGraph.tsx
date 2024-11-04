import type React from "react";

export type PopulationGraphProps = {};

import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useRef } from "react";

// The wrapper exports only a default component that at the same time is a
// namespace for the related Props interface (HighchartsReact.Props) and
// RefObject interface (HighchartsReact.RefObject). All other interfaces
// like Options come from the Highcharts module itself.

const options: Highcharts.Options = {
	title: {
		text: "My chart",
	},
	series: [
		{
			type: "line",
			data: [1, 2, 3],
		},
	],
};

export const PopulationGraph: React.FC<PopulationGraphProps> = (props) => {
	const chartComponentRef = useRef<HighchartsReact.RefObject>(null);
	return (
		<HighchartsReact
			highcharts={Highcharts}
			options={options}
			ref={chartComponentRef}
			{...props}
		/>
	);
};

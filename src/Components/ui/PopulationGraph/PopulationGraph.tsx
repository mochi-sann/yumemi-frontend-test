import type React from "react";

import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useRef } from "react";

export type PopulationGraphProps = {
	chartTitle: string;
	PrefChart: Array<{
		PrefName: String;
		label?: string;
		data: Array<{
			year: number;
			value: number;
			rate?: number;
		}>;
	}>;
};
// The wrapper exports only a default component that at the same time is a
// namespace for the related Props interface (HighchartsReact.Props) and
// RefObject interface (HighchartsReact.RefObject). All other interfaces
// like Options come from the Highcharts module itself.

export const PopulationGraph: React.FC<PopulationGraphProps> = (props) => {
	const options: Highcharts.Options = {
		title: {
			text: props.chartTitle,
		},
		chart: {
			type: "spline",
		},

		plotOptions: {
			series: {
				label: {
					connectorAllowed: false,
				},

				pointStart: 1960,
				pointInterval: 5,
			},
		},

		yAxis: {
			title: {
				text: "人口",
			},
			labels: {
				format: "{value}人",
			},
		},
		tooltip: {
			shared: false,
		},

		series: props.PrefChart.map((pref) => ({
			name: `${pref.PrefName} ${pref.label ? `: ${pref.label}` : ""}`,
			data: pref.data.map((value) => value.value),
		})) as Highcharts.SeriesOptionsType[],
	};
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

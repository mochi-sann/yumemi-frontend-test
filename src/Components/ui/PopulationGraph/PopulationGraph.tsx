import type React from "react";

import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useRef } from "react";
import { prefPopulationAtomType } from "../../../lib/jotai/prefPoplarionJotai";

export type PopulationGraphProps = {
	chartTitle: string;
	PrefChart: prefPopulationAtomType["PrefChart"];
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
		xAxis: {
			title: {
				text: "西暦",
			},
		},

		tooltip: {
			shared: false,
		},

		series: props.PrefChart.map((pref) => {
			if (pref.showGraph) {
				return {
					name: `${pref.PrefName} ${pref.label ? `: ${pref.label}` : ""}`,
					data: pref.data.map((value) => [value.year, value.value]),
				};
			} else {
				return null;
			}
		}).filter((value) => value !== null) as Highcharts.SeriesOptionsType[],
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

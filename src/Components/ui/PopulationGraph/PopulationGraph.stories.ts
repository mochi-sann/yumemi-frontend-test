import type { Meta, StoryObj } from "@storybook/react";
import { PopulationGraph } from "./PopulationGraph";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
	title: "ui/PopulationGraph",
	component: PopulationGraph,
	parameters: {
		// Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
		layout: "centered",
	},
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
	tags: ["ui"],
	// More on argTypes: https://storybook.js.org/docs/api/argtypes
	argTypes: {},
	// Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
	args: {},
} satisfies Meta<typeof PopulationGraph>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
	args: {
		chartTitle: "人口グラフ",
		PrefChart: [
			{
				prefCode: 2,
				showGraph: true,
				PrefName: "青森県",
				label: "年少人口",
				data: [
					{
						year: 1960,
						value: 513397,
						rate: 35.99,
					},
					{
						year: 1965,
						value: 447068,
						rate: 31.56,
					},
					{
						year: 1970,
						value: 396883,
						rate: 27.8,
					},
					{
						year: 1975,
						value: 380218,
						rate: 25.89,
					},
					{
						year: 1980,
						value: 366454,
						rate: 24.05,
					},
					{
						year: 1985,
						value: 338554,
						rate: 22.21,
					},
					{
						year: 1990,
						value: 289082,
						rate: 19.49,
					},
					{
						year: 1995,
						value: 252414,
						rate: 17.04,
					},
					{
						year: 2000,
						value: 223141,
						rate: 15.12,
					},
					{
						year: 2005,
						value: 198959,
						rate: 13.85,
					},
					{
						year: 2010,
						value: 171842,
						rate: 12.51,
					},
					{
						year: 2015,
						value: 148208,
						rate: 11.33,
					},
					{
						year: 2020,
						value: 129112,
						rate: 10.43,
					},
					{
						year: 2025,
						value: 114024,
						rate: 9.85,
					},
					{
						year: 2030,
						value: 100253,
						rate: 9.31,
					},
					{
						year: 2035,
						value: 87648,
						rate: 8.82,
					},
					{
						year: 2040,
						value: 77258,
						rate: 8.5,
					},
					{
						year: 2045,
						value: 67472,
						rate: 8.19,
					},
				],
			},
			{
				prefCode: 3,
				showGraph: true,
				PrefName: "北海道",
				label: "年少人口",
				data: [
					{
						year: 1960,
						value: 1681479,
						rate: 33.37,
					},
					{
						year: 1965,
						value: 1462123,
						rate: 28.27,
					},
					{
						year: 1970,
						value: 1309487,
						rate: 25.26,
					},
					{
						year: 1975,
						value: 1312611,
						rate: 24.59,
					},
					{
						year: 1980,
						value: 1298324,
						rate: 23.28,
					},
					{
						year: 1985,
						value: 1217959,
						rate: 21.45,
					},
					{
						year: 1990,
						value: 1034251,
						rate: 18.33,
					},
					{
						year: 1995,
						value: 898673,
						rate: 15.79,
					},
					{
						year: 2000,
						value: 792352,
						rate: 13.94,
					},
					{
						year: 2005,
						value: 719057,
						rate: 12.78,
					},
					{
						year: 2010,
						value: 657312,
						rate: 11.94,
					},
					{
						year: 2015,
						value: 608296,
						rate: 11.3,
					},
					{
						year: 2020,
						value: 555804,
						rate: 10.64,
					},
					{
						year: 2025,
						value: 511677,
						rate: 10.2,
					},
					{
						year: 2030,
						value: 465307,
						rate: 9.71,
					},
					{
						year: 2035,
						value: 423382,
						rate: 9.31,
					},
					{
						year: 2040,
						value: 391086,
						rate: 9.14,
					},
					{
						year: 2045,
						value: 360177,
						rate: 8.99,
					},
				],
			},
		],
	},
};
export const ShowOnlyHokkaido: Story = {
	args: {
		chartTitle: "人口グラフ",
		PrefChart: [
			{
				prefCode: 2,
				showGraph: false,
				PrefName: "青森県",
				label: "年少人口",
				data: [
					{
						year: 1960,
						value: 513397,
						rate: 35.99,
					},
					{
						year: 1965,
						value: 447068,
						rate: 31.56,
					},
					{
						year: 1970,
						value: 396883,
						rate: 27.8,
					},
					{
						year: 1975,
						value: 380218,
						rate: 25.89,
					},
					{
						year: 1980,
						value: 366454,
						rate: 24.05,
					},
					{
						year: 1985,
						value: 338554,
						rate: 22.21,
					},
					{
						year: 1990,
						value: 289082,
						rate: 19.49,
					},
					{
						year: 1995,
						value: 252414,
						rate: 17.04,
					},
					{
						year: 2000,
						value: 223141,
						rate: 15.12,
					},
					{
						year: 2005,
						value: 198959,
						rate: 13.85,
					},
					{
						year: 2010,
						value: 171842,
						rate: 12.51,
					},
					{
						year: 2015,
						value: 148208,
						rate: 11.33,
					},
					{
						year: 2020,
						value: 129112,
						rate: 10.43,
					},
					{
						year: 2025,
						value: 114024,
						rate: 9.85,
					},
					{
						year: 2030,
						value: 100253,
						rate: 9.31,
					},
					{
						year: 2035,
						value: 87648,
						rate: 8.82,
					},
					{
						year: 2040,
						value: 77258,
						rate: 8.5,
					},
					{
						year: 2045,
						value: 67472,
						rate: 8.19,
					},
				],
			},
			{
				prefCode: 3,
				showGraph: true,
				PrefName: "北海道",
				label: "年少人口",
				data: [
					{
						year: 1960,
						value: 1681479,
						rate: 33.37,
					},
					{
						year: 1965,
						value: 1462123,
						rate: 28.27,
					},
					{
						year: 1970,
						value: 1309487,
						rate: 25.26,
					},
					{
						year: 1975,
						value: 1312611,
						rate: 24.59,
					},
					{
						year: 1980,
						value: 1298324,
						rate: 23.28,
					},
					{
						year: 1985,
						value: 1217959,
						rate: 21.45,
					},
					{
						year: 1990,
						value: 1034251,
						rate: 18.33,
					},
					{
						year: 1995,
						value: 898673,
						rate: 15.79,
					},
					{
						year: 2000,
						value: 792352,
						rate: 13.94,
					},
					{
						year: 2005,
						value: 719057,
						rate: 12.78,
					},
					{
						year: 2010,
						value: 657312,
						rate: 11.94,
					},
					{
						year: 2015,
						value: 608296,
						rate: 11.3,
					},
					{
						year: 2020,
						value: 555804,
						rate: 10.64,
					},
					{
						year: 2025,
						value: 511677,
						rate: 10.2,
					},
					{
						year: 2030,
						value: 465307,
						rate: 9.71,
					},
					{
						year: 2035,
						value: 423382,
						rate: 9.31,
					},
					{
						year: 2040,
						value: 391086,
						rate: 9.14,
					},
					{
						year: 2045,
						value: 360177,
						rate: 8.99,
					},
				],
			},
		],
	},
};

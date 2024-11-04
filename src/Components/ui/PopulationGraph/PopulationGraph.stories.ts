import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
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
		chartTitle: "ちゃーとたいとる",
		PrefChart: [
			{
				PrefName: "北海道",
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

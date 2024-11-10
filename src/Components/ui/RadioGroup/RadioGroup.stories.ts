import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { SwithRadioGroup } from "./RadioGroup";

const meta = {
	title: "ui/GrapthTypeRadioGroup",
	component: SwithRadioGroup,
	parameters: {
		// Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
		layout: "centered",
	},
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
	tags: ["ui"],
	// More on argTypes: https://storybook.js.org/docs/api/argtypes
	argTypes: {},
	// Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
	args: {
		setValue: fn(),
	},
} satisfies Meta<typeof SwithRadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
	args: {
		label: "label Name",
		value: "hoge 1",
		SelectList: ["hoge 1", "hoge 2", "hoge 3"],
	},
};
export const Second: Story = {
	args: {
		label: "表示するグラフを選択",
		value: "総人口",
		SelectList: ["総人口", "年少人口", "生産年齢人口", "老年人口"],
	},
};

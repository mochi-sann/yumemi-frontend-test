import type { Meta, StoryObj } from "@storybook/react";
import { CheckBoxList } from "./CheckBoxList";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
	title: "ui/CheckBoxList",
	component: CheckBoxList,
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
} satisfies Meta<typeof CheckBoxList>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
	args: {
		prefList: [
			{
				prefCode: 1,
				prefName: "北海道",
			},
			{
				prefCode: 2,
				prefName: "青森県",
			},
			{
				prefCode: 3,
				prefName: "秋田県",
			},
			{
				prefCode: 4,
				prefName: "岩手県",
			},
		],
	},
};

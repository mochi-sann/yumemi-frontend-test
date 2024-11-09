import type { Meta, StoryObj } from "@storybook/react";
import { expect, fn, userEvent, within } from "@storybook/test";
import { CheckBox } from "./CheckBox";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
	title: "ui/CheckBox",
	component: CheckBox,
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
		onClick: fn(),
	},
} satisfies Meta<typeof CheckBox>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
	args: {
		name: "北海道",
		prefCode: "1",
		checed: false,
	},
	play: async ({ args, canvasElement }) => {
		const canvas = within(canvasElement);
		await userEvent.click(canvas.getByRole("button"));
		await expect(args.onClick).toHaveBeenCalled();
	},
};
export const Checked: Story = {
	args: {
		name: "北海道",
		prefCode: "1",
		checed: true,
	},
	play: async ({ args, canvasElement }) => {
		const canvas = within(canvasElement);
		await userEvent.click(canvas.getByRole("button"));
		await expect(args.onClick).toHaveBeenCalled();
	},
};

import type React from "react";

import { Field, Label, Radio, RadioGroup } from "@headlessui/react";
import { Fragment } from "react";
import { ImRadioChecked, ImRadioUnchecked } from "react-icons/im";
import { css } from "../../../../styled-system/css";
import { styled } from "../../../../styled-system/jsx";
export type SwithRadioGroupProps = {
	value: string;
	setValue: (value: string) => void;
	SelectList: Array<string>;
	label: string;
};

export const SwithRadioGroup: React.FC<SwithRadioGroupProps> = (props) => {
	return (
		<div>
			<RadioGroup value={props.value} onChange={props.setValue}>
				<Label>{props.label}</Label>
				<div className={css({ gap: "2", display: "flex" })}>
					{props.SelectList.map((item) => (
						<Field key={item}>
							<Radio as={Fragment} value={item}>
								{({ checked }) => (
									<RadioButtonStyule
										buttonStyle={checked ? "Checked" : "UnChecked"}
									>
										<span>
											{checked ? <ImRadioChecked /> : <ImRadioUnchecked />}
										</span>
										{item}
									</RadioButtonStyule>
								)}
							</Radio>
						</Field>
					))}
				</div>
			</RadioGroup>
		</div>
	);
};

const RadioButtonStyule = styled("button", {
	base: {
		display: "inline-flex",
		bg: "background.accent",
		color: "foreground.accent",
		padding: "2",
		cursor: "pointer",
		gap: 1,
		alignItems: "center",
		justifyContent: "center",
		whiteSpace: "nowrap",
		rounded: "lg",
		paddingY: "2",
		paddingX: "4",
		transition: "colors",
		outlineOffset: "0.2rem",
		outlineColor: "outline",
		_disabled: {
			pointerEvents: "none",
			opacity: 0.5,
		},
		_hover: {
			filter: "brightness(90%)",
		},
	},

	variants: {
		buttonStyle: {
			Checked: {
				bg: "background.accent",
				color: "foreground.accent",
				borderColor: "background.accent",
				borderWidth: "2",
				borderStyle: "solid",
			},
			UnChecked: {
				background: "background",
				color: "foreground",
				borderColor: "foreground",
				borderWidth: "2",
				borderStyle: "solid",
			},
		},
	},
	defaultVariants: {
		buttonStyle: "UnChecked",
	},
});

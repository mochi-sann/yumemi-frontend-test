import { css, cva } from "@styled-system/css";
import type React from "react";

export type CheckBoxProps = {
	name: string;
	prefCode: string;
	CheckBoxProps?: React.DetailedHTMLProps<
		React.InputHTMLAttributes<HTMLInputElement>,
		HTMLInputElement
	>;
};

export const CheckBox: React.FC<CheckBoxProps> = (props) => {
	return (
		<div>
			<label
				className={css({
					display: "inline-flex",
					gap: 1,
					alignItems: "center",
				})}
			>
				{props.name}
				<input
					className={css({
						w: "4",
						h: "4",
						borderColor: "gray.500",
						borderRadius: "md",
					})}
					type="checkbox"
					value={props.prefCode}
					{...props.CheckBoxProps}
				/>
			</label>
		</div>
	);
};
export const CheckBoxStyle = cva({
	base: {
		display: "flex",
	},
	variants: {
		color: {},
		size: {
			lg: { fontSize: "24px", padding: "8" },
			sm: { fontSize: "12px", padding: "4" },
		},
	},
});

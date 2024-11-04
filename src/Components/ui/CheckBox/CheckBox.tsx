import type React from "react";
import { css } from "../../../../styled-system/css";

export type CheckBoxProps = {
	name: string;
	prefCode: string;
	onclick: (id: number, checked: boolean) => void;
	value: boolean;
	defalutValue: boolean;
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

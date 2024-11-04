import type React from "react";
import { ImCheckboxChecked, ImCheckboxUnchecked } from "react-icons/im";
import { css } from "../../../../styled-system/css";

export type CheckBoxProps = {
	name: string;
	prefCode: string;
	onClick: (prefCode: number, checked: boolean) => void;
	checed: boolean;
};

export const CheckBox: React.FC<CheckBoxProps> = (props) => {
	return (
		<button
			onClick={() => props.onClick(Number(props.prefCode), !props.checed)}
			className={css({
				cursor: "pointer",
				display: "inline-flex",
				p: "1",
			})}
		>
			<span
				className={css({
					display: "inline-flex",
					gap: 1,
					alignItems: "center",
				})}
			>
				<span>
					{props.checed ? <ImCheckboxChecked /> : <ImCheckboxUnchecked />}
				</span>
				{props.name}
			</span>
		</button>
	);
};

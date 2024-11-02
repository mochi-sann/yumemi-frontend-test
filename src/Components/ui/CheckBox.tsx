import type React from "react";

export type CheckBoxProps = {
	name: string;
};

export const CheckBox: React.FC<CheckBoxProps> = (props) => {
	return (
		<div>
			<label>
				{props.name}
				<input type="checkbox" />
			</label>
		</div>
	);
};

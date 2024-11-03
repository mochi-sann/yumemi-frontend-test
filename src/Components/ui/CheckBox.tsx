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
			<label className="inline-flex items-center ">
				{props.name}
				<input
					className="w-4 h-4  border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
					type="checkbox"
					value={props.prefCode}
					{...props.CheckBoxProps}
				/>
			</label>
		</div>
	);
};

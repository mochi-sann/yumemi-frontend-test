import type React from "react";
import { css } from "../../../../styled-system/css";
import type { components } from "../../../lib/openai/schema";
import { CheckBox } from "../CheckBox/CheckBox";

export type CheckBoxListPageProps = {
	prefList: Array<components["schemas"]["Prefecture"]>;
	addChecked: (prefCode: number) => void;
	deleteChecked: (prefCode: number) => void;
	checkedList: number[];
};

export const CheckBoxList: React.FC<CheckBoxListPageProps> = (props) => {
	return (
		<div>
			{" "}
			<div
				className={css({
					display: "flex",
					rowGap: "4",
					columnGap: "2",
					flexDir: "row",
					flexWrap: "wrap",
					justifyContent: "left",
				})}
			>
				{props.prefList.map((value) => (
					<div key={value.prefCode}>
						<CheckBox
							checed={props.checkedList.includes(value.prefCode)}
							name={value.prefName}
							prefCode={value.prefCode.toString()}
							onClick={(prefCode, checked) => {
								if (!checked) {
									props.deleteChecked(prefCode);
								} else {
									props.addChecked(prefCode);
								}
							}}
						/>
					</div>
				))}
			</div>
		</div>
	);
};

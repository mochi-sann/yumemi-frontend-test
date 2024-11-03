import type React from "react";
import type { components } from "../../../lib/openai/schema";
import { CheckBox } from "../CheckBox/CheckBox";

export type CheckBoxListPageProps = {
	prefList: Array<components["schemas"]["Prefecture"]>;
};

export const CheckBoxList: React.FC<CheckBoxListPageProps> = (props) => {
	return (
		<div>
			{" "}
			<div className="flex flex-wrap flex-row gap-x-4 gap-y-2">
				{props.prefList.map((value) => (
					<div key={value.prefCode}>
						<CheckBox
							name={value.prefName}
							prefCode={value.prefCode.toString()}
						/>
					</div>
				))}
			</div>
		</div>
	);
};

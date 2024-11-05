import { useSetPrefCheckbox } from "../../hooks/useSetPrefCheckbox";
import { CheckBoxList } from "../ui/CheckBoxList/CheckBoxList";

export const MainPage: React.FC = () => {
	const {
		query: { data, error, isLoading },
		checkedList,
		addChecked,
		deleteChecked,
	} = useSetPrefCheckbox();
	if (!data || isLoading) return "読み込中...";
	if (error) return `エラーが発生しました: ${error}`;
	return (
		<div>
			<CheckBoxList
				prefList={data.result}
				checkedList={checkedList}
				deleteChecked={deleteChecked}
				addChecked={addChecked}
			/>
		</div>
	);
};

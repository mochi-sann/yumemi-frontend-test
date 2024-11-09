import { useAtom } from "jotai";
import { useSetPrefCheckbox } from "../../hooks/useSetPrefCheckbox";
import { prefPopulationAtom } from "../../lib/jotai/prefPoplarionJotai";
import { CheckBoxList } from "../ui/CheckBoxList/CheckBoxList";
import { PopulationGraph } from "../ui/PopulationGraph/PopulationGraph";

export const MainPage: React.FC = () => {
	const {
		query: { data, error, isLoading },
		checkedList,
		addChecked,
		deleteChecked,
	} = useSetPrefCheckbox();
	const [prefState] = useAtom(prefPopulationAtom);

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
			<PopulationGraph PrefChart={prefState.PrefChart} chartTitle={"hoge"} />

			<pre>{JSON.stringify({ data, checkedList, prefState }, null, 2)}</pre>
		</div>
	);
};

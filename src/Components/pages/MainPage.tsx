import { useAtom } from "jotai";
import { useSetPrefCheckbox } from "../../hooks/useSetPrefCheckbox";
import { PopulationGraphTypeAtom } from "../../lib/jotai/PopulationGraphTypeJotai";
import { prefPopulationAtom } from "../../lib/jotai/prefPoplarionJotai";
import { CheckBoxList } from "../ui/CheckBoxList/CheckBoxList";
import { PopulationGraph } from "../ui/PopulationGraph/PopulationGraph";
import { SwithRadioGroup } from "../ui/RadioGroup/RadioGroup";

export const MainPage: React.FC = () => {
	const {
		query: { data, error, isLoading },
		checkedList,
		addChecked,
		deleteChecked,
	} = useSetPrefCheckbox();
	const [prefState] = useAtom(prefPopulationAtom);
	const [poplationGraphType, setPoplationGraphType] = useAtom(
		PopulationGraphTypeAtom,
	);

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
			<SwithRadioGroup
				value={poplationGraphType}
				setValue={setPoplationGraphType}
				SelectList={["総人口", "年少人口", "生産年齢人口", "老年人口"]}
				label="表示するグラフを選択"
			/>
			<PopulationGraph
				PrefChart={prefState.PrefChart}
				chartTitle={"人口グラフ"}
			/>
		</div>
	);
};

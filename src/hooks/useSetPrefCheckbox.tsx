import { useAtom } from "jotai";
import { $api, fetchClient } from "../lib/api/FetchClient";
import {
	PrefCheckedListAtom,
	prefPopulationAtom,
	prefPopulationAtomType,
} from "../lib/jotai/prefPoplarionJotai";
import { removeDuplicates } from "../utils/removeDuplicates";

export function useSetPrefCheckbox() {
	const query = $api.useQuery("get", "/api/v1/prefectures", {});
	const [checkedList, setCheckedList] = useAtom(PrefCheckedListAtom);
	const [_, setPrefPoplation] = useAtom(prefPopulationAtom);
	const addCecked = async (prefCode: number) => {
		setCheckedList((value) => {
			return removeDuplicates([prefCode, ...value]);
		});
		const PrefPoplation = await fetchClient.GET(
			"/api/v1/population/composition/perYear",
			{
				params: {
					query: {
						prefCode: prefCode.toString(),
					},
				},
			},
		);
		const PrefPoplationData = PrefPoplation.data?.result.data.filter(
			(item) => item.label == "総人口",
		);

		if (
			PrefPoplationData != undefined &&
			query.data &&
			query.data.result &&
			query.data.result.length
		) {
			setPrefPoplation((preValue) => {
				const newValue: prefPopulationAtomType = {
					PrefChart: [
						{
							prefCode: prefCode,
							data: PrefPoplationData[0]
								.data as prefPopulationAtomType["PrefChart"][0]["data"],
							PrefName:
								query.data.result.filter((item) => item.prefCode == prefCode)[0]
									.prefName || "",
							showGraph: true,
							label: PrefPoplationData[0].label,
						},
						...preValue.PrefChart,
					],
				};
				return newValue;
			});
		}
	};
	const deleteChecked = (prefCode: number) => {
		setPrefPoplation((preValue) => {
			const newValue = preValue.PrefChart.map((element) => {
				if (element.prefCode === prefCode) {
					element.showGraph = false;
				}
				return element;
			});
			return {
				PrefChart: newValue,
			};
		});
		setCheckedList((value) => {
			return value.filter((code) => code !== prefCode);
		});
	};

	return {
		query,
		checkedList,
		addChecked: addCecked,
		deleteChecked,
	};
}

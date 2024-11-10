import { useAtom } from "jotai";
import { $api, fetchClient } from "../lib/api/FetchClient";
import { PopulationGraphTypeAtom } from "../lib/jotai/PopulationGraphTypeJotai";
import {
	PrefCheckedListAtom,
	prefPopulationAtom,
	prefPopulationAtomType,
} from "../lib/jotai/prefPoplarionJotai";
import { removeDuplicates } from "../utils/removeDuplicates";

export function useSetPrefCheckbox() {
	const query = $api.useQuery("get", "/api/v1/prefectures", {});
	const [checkedList, setCheckedList] = useAtom(PrefCheckedListAtom);
	const [PrefPoplation, setPrefPoplation] = useAtom(prefPopulationAtom);
	const [poplationGraphType, _] = useAtom(PopulationGraphTypeAtom);
	const addChecked = async (prefCode: number) => {
		setCheckedList((value) => {
			return removeDuplicates([prefCode, ...value]);
		});
		// 都道府県のデータが既にあったらshowGraphをtrueにする
		if (PrefPoplation.PrefChart.some((item) => item.prefCode == prefCode)) {
			// 既に存在する場合
			let PrefnewValue = {
				PrefChart: PrefPoplation.PrefChart.map((element) => {
					if (element.prefCode === prefCode) {
						element.showGraph = true;
					}
					return element;
				}),
			};
			setPrefPoplation(PrefnewValue);
		} else {
			const PrefPoplationResponse = await fetchClient.GET(
				"/api/v1/population/composition/perYear",
				{
					params: {
						query: {
							prefCode: prefCode.toString(),
						},
					},
				},
			);

			const PrefPoplationData = PrefPoplationResponse.data?.result.data.filter(
				(item) => item.label == poplationGraphType,
			);
			if (
				PrefPoplationData &&
				query.data &&
				query.data.result &&
				query.data.result.length
			) {
				setPrefPoplation((preValue) => {
					let newValue: prefPopulationAtomType;
					// PrefPopulationデータを使用して新しいエントリを作成
					newValue = {
						PrefChart: [
							...preValue.PrefChart,
							{
								prefCode: prefCode,
								data: PrefPoplationData[0]
									.data as prefPopulationAtomType["PrefChart"][0]["data"],
								PrefName:
									query.data.result.filter(
										(item) => item.prefCode == prefCode,
									)[0].prefName || "",
								showGraph: true,
								label: PrefPoplationData[0].label,
							},
						],
					};
					return newValue;
				});
			}
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
		addChecked: addChecked,
		deleteChecked,
	};
}

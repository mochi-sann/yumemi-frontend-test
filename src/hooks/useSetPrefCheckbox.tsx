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
		const PrefPoplationData = PrefPoplation.data?.result.data;
		if (PrefPoplationData != undefined) {
			console.log(
				...[
					PrefPoplationData,
					"👀 [useSetPrefCheckbox.tsx:30]: PrefPoplationData",
				].reverse(),
			);
			setPrefPoplation((preValue) => {
				const newValue: prefPopulationAtomType = {
					PrefChart: [
						{
							data: PrefPoplationData[0]
								.data as prefPopulationAtomType["PrefChart"][0]["data"],
							PrefName: "hoge",
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

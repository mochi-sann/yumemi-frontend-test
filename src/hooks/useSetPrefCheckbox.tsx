import { useAtom } from "jotai";
import { $api, fetchClient } from "../lib/api/FetchClient";
import { PrefCheckedListAtom } from "../lib/jotai/prefPoplarionJotai";
import { removeDuplicates } from "../utils/removeDuplicates";

export function useSetPrefCheckbox() {
	const query = $api.useQuery("get", "/api/v1/prefectures", {});
	const [checkedList, setCheckedList] = useAtom(PrefCheckedListAtom);
	const addCecked = async (prefCode: number) => {
		const PrefPoplationData = fetchClient.GET(
			"/api/v1/population/composition/perYear",
			{
				params: {
					query: {
						prefCode: prefCode.toString(),
					},
				},
			},
		);
		setCheckedList((value) => {
			return removeDuplicates([prefCode, ...value]);
		});
		console.dir(await PrefPoplationData, {
			showHidden: false,
			depth: null,
			colors: true,
		});
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

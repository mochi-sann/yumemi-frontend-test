import { useAtom } from "jotai";
import { $api } from "../lib/api/FetchClient";
import { PrefCheckedListAtom } from "../lib/jotai/prefPoplarionJotai";
import { removeDuplicates } from "../utils/removeDuplicates";

export function useSetPrefCheckbox() {
	const query = $api.useQuery("get", "/api/v1/prefectures", {});
	const [checkedList, setCheckedList] = useAtom(PrefCheckedListAtom);
	const addCecked = (prefCode: number) => {
		setCheckedList((value) => {
			return removeDuplicates([prefCode, ...value]);
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

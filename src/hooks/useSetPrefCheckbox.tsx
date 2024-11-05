import { useState } from "react";
import { $api } from "../lib/api/FetchClient";

export function useSetPrefCheckbox() {
	const query = $api.useQuery("get", "/api/v1/prefectures", {});
	const [checkedList, setCheckedList] = useState<number[]>([]);
	const addCecked = (prefCode: number) => {
		setCheckedList((value) => {
			return [prefCode, ...value];
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

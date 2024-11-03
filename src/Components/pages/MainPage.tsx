import { $api } from "../../lib/api/FetchClient";
import { CheckBoxList } from "../ui/CheckBoxList/CheckBoxList";

export const MainPage: React.FC = () => {
	const { data, error, isLoading } = $api.useQuery(
		"get",
		"/api/v1/prefectures",
		{},
	);
	if (!data || isLoading) return "読み込み中...";
	if (error) return `エラーが発生しました: ${error}`;
	return (
		<div>
			<CheckBoxList prefList={data.result} />
		</div>
	);
};

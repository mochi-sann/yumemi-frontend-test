import { $api } from "../../lib/api/FetchClient";
import { CheckBoxListPage } from "../ui/CheckBoxListPage";

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
			<p>hello world</p>
			<h2>APP TITLE: {JSON.stringify(data)}</h2>
			<CheckBoxListPage prefList={data.result} />
		</div>
	);
};

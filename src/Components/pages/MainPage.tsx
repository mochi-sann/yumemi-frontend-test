import { $api } from "../../lib/api/FetchClient";

export type MainPageProps = null;

export const MainPage: React.FC<MainPageProps> = (props) => {
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
		</div>
	);
};

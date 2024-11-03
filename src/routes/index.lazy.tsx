import { createLazyFileRoute } from "@tanstack/react-router";
import { MainPage } from "../Components/pages/MainPage";

export const Route = createLazyFileRoute("/")({
	component: Index,
});

function Index() {
	return (
		<div className="p-2">
			<MainPage />
		</div>
	);
}

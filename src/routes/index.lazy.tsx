import { createLazyFileRoute } from "@tanstack/react-router";
import { css } from "../../styled-system/css";
import { MainPage } from "../Components/pages/MainPage";

export const Route = createLazyFileRoute("/")({
	component: Index,
});

function Index() {
	return (
		<div
			className={css({
				p: 2,
			})}
		>
			<MainPage />
		</div>
	);
}

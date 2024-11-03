import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { Header } from "../Components/layouts/Header/Header";
import { Layout } from "../Components/layouts/Layout";

export const Route = createRootRoute({
	component: () => (
		<>
			<Header />
			<hr />
			<Layout>
				<Outlet />
			</Layout>
			<TanStackRouterDevtools />
		</>
	),
});

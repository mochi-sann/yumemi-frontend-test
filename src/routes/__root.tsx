import { Link, Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { Layout } from "../Components/layouts/Layout";

export const Route = createRootRoute({
	component: () => (
		<>
			<div className="p-2 flex gap-2">
				<Link to="/" className="[&.active]:font-bold">
					Home
				</Link>{" "}
			</div>
			<hr />
			<Layout>
				<Outlet />
			</Layout>
			<TanStackRouterDevtools />
		</>
	),
});

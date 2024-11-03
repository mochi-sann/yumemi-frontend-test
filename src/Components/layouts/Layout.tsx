import type React from "react";

export type LayoutProps = {
	children: React.ReactNode;
};

export const Layout: React.FC<LayoutProps> = (props) => {
	return <div className="max-w-3xl flex-row m-auto">{props.children}</div>;
};

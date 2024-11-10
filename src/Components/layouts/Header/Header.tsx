import { Link } from "@tanstack/react-router";
import type React from "react";
import { css } from "../../../../styled-system/css";

export const Header: React.FC = () => {
	return (
		<div className={css({ p: 2, display: "flex", gap: 2 })}>
			<Link
				to="/"
				className={css({
					fontWeight: "bold",
				})}
			>
				都道府県人口グラフ表示アプリ
			</Link>{" "}
		</div>
	);
};

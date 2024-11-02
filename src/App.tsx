import { useState } from "react";
import viteLogo from "/vite.svg";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { MainPage } from "./Components/pages/MainPage";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<MainPage />
		</>
	);
}

export default App;

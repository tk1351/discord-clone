import React from "react";
import ReactDOM from "react-dom/client";
import "./reset.css";
import "./index.css";
import { RouterConfig } from "./lib/router.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<RouterConfig />
	</React.StrictMode>,
);

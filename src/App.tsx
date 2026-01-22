import { BrowserRouter } from "react-router";
import { AuthProvider } from "./contexts/AuthContext";
import { Router } from "./routes";

function App() {
	return (
		<AuthProvider>
			<BrowserRouter>
				<Router />
			</BrowserRouter>
		</AuthProvider>
	);
}

export { App };

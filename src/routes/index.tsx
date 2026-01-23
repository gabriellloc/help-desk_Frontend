import { useAuth } from "../hooks/useAuth";
import { Routes, Route } from "react-router";

// Layout
import { MainLayout } from "../Layouts/Main";
import { AuthenticatedLayout } from "../Layouts/Authenticated";

// Pages
import { Login } from "../pages/Login";
import { SignUp } from "../pages/SignUp";
// ADMIN PAGES
import { Called } from "../pages/adminPages/Called";
import { Technical } from "../pages/adminPages/AllTechnical";
import { AllServices } from "../pages/adminPages/AllServices";
import { CalledDetails } from "../pages/adminPages/CalledDetails";
// ADMIN PAGES SETTINGS
import { NewTechnical } from "../pages/adminPages/tecnhicalSettings/NewTechnical";
import { EditTechnical } from "../pages/adminPages/tecnhicalSettings/EditTechnical";
import { AllCustomers } from "../pages/adminPages/AllCustomers";
import { MyTechnicalCalled } from "../pages/technicalPages/MyCalled";


export const user: { id: number; role: "admin" | "customer" | "technical" | "" } = {
	id: 1,
	role: "technical",
};

function Router() {
	const context = useAuth();
	console.log(context);
	switch (user.role) {
		case "admin":
			return (
				<Routes>
					<Route path="admin" element={<MainLayout type="admin" />}>
						<Route index element={<Called />} />
						<Route path=":id/detalhes" element={<CalledDetails />} />
						<Route path="tecnicos" element={<Technical />} />
						<Route path="tecnicos/novo" element={<NewTechnical />} />
						<Route path="tecnicos/:id/edit" element={<EditTechnical />} />
						<Route path="clientes" element={<AllCustomers />} />
						<Route path="servicos" element={<AllServices />} />
					</Route>
				</Routes>
			);

		case "technical":
			return (
				<Routes>
					<Route path="/technical" element={<MainLayout type="technical" />}>
						<Route index element={<MyTechnicalCalled />} />
					</Route>
				</Routes>
			)
		case "customer":
			return;
		default:
			return (
				<Routes>
					<Route path="/" element={<AuthenticatedLayout />}>
						<Route index element={<Login />} />
						<Route path="signUp" element={<SignUp />} />
					</Route>
				</Routes>
			)
	}
}

export { Router };

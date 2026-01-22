import { createContext } from "react";

export const AuthContext = createContext({});

export function AuthProvider({ children }: { children: React.ReactNode }) {
	return (
		<AuthContext.Provider value={{ user: { id: 1, name: "Gabriel", email: "gabriel@gmail.com", role: "admin" } }}>
			{children}
		</AuthContext.Provider>
	)
}

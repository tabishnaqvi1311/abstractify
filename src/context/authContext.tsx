import { ReactNode, createContext, useEffect, useReducer } from "react";

interface AuthContextProps {
    children: ReactNode;
}
interface AuthState {
    user: string | null;
}

type AuthAction = { type: "LOGIN"; payload: string } | { type: "LOGOUT" };

export const AuthContext = createContext<{ user: string | null; dispatch: React.Dispatch<AuthAction> }>({ user: null, dispatch: () => {} });


export const authReducer = (state: AuthState, action: AuthAction) => {
    if (action.type === "LOGIN") return { user: action.payload };
    if (action.type === "LOGOUT") return { user: null };
    else return state;
}

export const AuthContextProvider = ({ children }: AuthContextProps) => {
    const [state, dispatch] = useReducer(authReducer, { user: null });

    useEffect(() => {
        const token = localStorage.getItem("auth-token");

        if (token) dispatch({ type: "LOGIN", payload: token });
    }, []);

    return (
        <AuthContext.Provider value={{ ...state, dispatch }}>
            {children}
        </AuthContext.Provider>
    )
}

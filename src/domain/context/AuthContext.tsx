"use client"

import { createContext, FC, ReactNode, useContext, useState } from "react";

interface AuthConxtexType {
    session: boolean;
    login: () => void;
    logout: () => void;
}

const DefaultAuthContext: AuthConxtexType = {
    login: () => {},
    logout: () => {},
    session: false
}

const AuthConxtex = createContext(DefaultAuthContext);

interface Props {
    children: ReactNode
}

export const AuthProvider: FC<Props> = ({ children }) => {

    const [session, setSession] = useState(false);

    const login = () => setSession(true);
    const logout = () => setSession(false);

    return (
        <AuthConxtex.Provider value={{ login, logout, session }}>
            { children }
        </AuthConxtex.Provider>
    )
}

export const useAuth = () => useContext(AuthConxtex);

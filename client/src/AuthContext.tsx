import { createContext, useState } from 'react';

export interface AuthUser {
    id: number;
    name: string;
    role: string;
    department?: string;
}

interface AuthCtx {
    user: AuthUser | null;
    setUser: (u: AuthUser | null) => void;
}

export const AuthContext = createContext<AuthCtx>({
    user: null,
    setUser: () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<AuthUser | null>(null);
    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    );
};

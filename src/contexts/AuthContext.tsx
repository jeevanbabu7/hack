import React, { createContext, useContext, useEffect, useState } from 'react';

interface AuthContextType {
  user: string | null;
  userRole: string | null;
  loading: boolean;
  signIn: (user: UserType) => void;
  signOut: () => void;
}

interface UserType {
  id: string;
  role: string;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  userRole: null,
  loading: false,
  signIn: () => {},
  signOut: () => {},
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<string | null>(null);
  const [userRole, setUserRole] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // Simulating a stored session (e.g., from localStorage)
  useEffect(() => {
    setLoading(true);
    const storedUser = localStorage.getItem('user');
    const storedRole = localStorage.getItem('userRole');

    if (storedUser && storedRole) {
      setUser(storedUser);
      setUserRole(storedRole);
    }

    setLoading(false);
  }, []);

  const signIn = (user: UserType) => {
    setUser(user.id);
    setUserRole(user.role);
    localStorage.setItem('user', user.id);
    localStorage.setItem('userRole', user.role);
  };

  const signOut = () => {
    setUser(null);
    setUserRole(null);
    localStorage.removeItem('user');
    localStorage.removeItem('userRole');
  };

  return (
    <AuthContext.Provider value={{ user, userRole, loading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

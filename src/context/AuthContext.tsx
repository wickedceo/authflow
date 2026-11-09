import { useEffect, useState, type ReactNode } from "react";
import { AuthContext } from "./auth-context";
import type {
  AuthCredentials,
  RegisterCredentials,
  User,
} from "../types/auth";
import { supabase } from "../lib/supabase";

interface AuthProviderProps {
  children: ReactNode;
}

function mapUser(authUser: {
  id: string;
  email?: string;
  email_confirmed_at?: string;
  created_at: string;
  user_metadata: { full_name?: string };
}): User {
  return {
    id: authUser.id,
    name: authUser.user_metadata.full_name || "User",
    email: authUser.email || "",
    role: "user",
    emailVerified: Boolean(authUser.email_confirmed_at),
    createdAt: authUser.created_at,
  };
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data, error }) => {
      if (error) {
        console.error("Session error:", error.message);
      }

      setUser(data.session?.user ? mapUser(data.session.user) : null);
      setIsLoading(false);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ? mapUser(session.user) : null);
      setIsLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const login = async (credentials: AuthCredentials) => {
    const { error } = await supabase.auth.signInWithPassword({
      email: credentials.email,
      password: credentials.password,
    });

    if (error) throw error;
  };

  const register = async (credentials: RegisterCredentials) => {
    const { error } = await supabase.auth.signUp({
      email: credentials.email,
      password: credentials.password,
      options: {
        data: { full_name: credentials.name },
      },
    });

    if (error) throw error;
  };

  const logout = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) throw error;
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: Boolean(user),
        isLoading,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
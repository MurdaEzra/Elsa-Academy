import React, { useEffect, useState, createContext, useContext } from 'react';
import supabase from '../components/supabaseClient.ts';

type ExtendedUser = import('@supabase/supabase-js').User & { role?: string };

type AuthContextType = {
  user: ExtendedUser | null;
  loading: boolean;
  login: ({
    email,
    password
  }: {
    email: string;
    password: string;
  }) => Promise<{ success: boolean; error?: string; user?: ExtendedUser }>;
  logout: () => Promise<void>;
  isAuthenticated: boolean;
};

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState<ExtendedUser | null>(null);
  const [loading, setLoading] = useState(true);

  // Fetch role from profiles table
  const fetchUserWithRole = async (baseUser: ExtendedUser | null) => {
    if (!baseUser) {
      setUser(null);
      return;
    }

    const { data: profile, error } = await supabase
      .from('profiles')
      .select('role')
      .eq('id', baseUser.id)
      .single();

    if (profile?.role) {
      setUser({ ...baseUser, role: profile.role });
    } else {
      setUser(baseUser); // fallback
    }
  };

  useEffect(() => {
    // Initial session check
    supabase.auth.getSession().then(({ data: { session } }) => {
      fetchUserWithRole(session?.user ?? null);
      setLoading(false);
    });

    // Listen for auth state changes
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      fetchUserWithRole(session?.user ?? null);
    });

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  const login = async ({ email, password }) => {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      return { success: false, error: error.message };
    }

    const baseUser = data.user;

    const { data: profile, error: profileError } = await supabase
      .from('profiles')
      .select('role')
      .eq('id', baseUser.id)
      .single();

    let finalUser = baseUser;
    if (profile?.role) {
      finalUser = { ...baseUser, role: profile.role };
    }

    setUser(finalUser);
    return { success: true, user: finalUser };
  };

  const logout = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };

  const value = {
    user,
    loading,
    login,
    logout,
    isAuthenticated: !!user
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === null) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
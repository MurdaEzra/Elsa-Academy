import React, { useEffect, useState, createContext, useContext } from 'react';
import supabase from '../components/supabaseClient.ts'; // Adjust path if needed

type AuthContextType = {
  user: import('@supabase/supabase-js').User | null;
  loading: boolean;
  login: ({ email, password }: { email: string; password: string }) => Promise<{ success: boolean; error?: string; user?: import('@supabase/supabase-js').User }>;
  logout: () => Promise<void>;
  isAuthenticated: boolean;
};

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({
  children
}) => {
  const [user, setUser] = useState<import('@supabase/supabase-js').User | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Listen for auth state changes
    const {
      data: listener
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });
    // Check initial session
    supabase.auth.getSession().then(({
      data: {
        session
      }
    }) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });
    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);
  const login = async ({
    email,
    password
  }) => {
    const {
      data,
      error
    } = await supabase.auth.signInWithPassword({
      email,
      password
    });
    if (error) {
      return {
        success: false,
        error: error.message
      };
    }
    let user = data.user;
    // Fetch role from profiles table
    const {
      data: profile,
      error: profileError
    } = await supabase.from('profiles').select('role').eq('id', user.id).single();
    if (profile && profile.role) {
      user = { ...user, role: profile.role };
    }
    setUser(user);
    return {
      success: true,
      user
    };
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
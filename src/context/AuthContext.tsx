import React, { useEffect, useState, createContext, useContext } from 'react';
import supabase from '../components/supabaseClient'; // Adjust path if needed
const AuthContext = createContext(null);
export const AuthProvider = ({
  children
}) => {
  const [user, setUser] = useState(null);
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
    setUser(data.user);
    return {
      success: true,
      user: data.user
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
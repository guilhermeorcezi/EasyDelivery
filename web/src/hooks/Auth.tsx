/* eslint-disable @typescript-eslint/ban-types */

import React, { createContext, useCallback, useContext, useState } from 'react';
import api from '../services/api';

interface AuthState {
  token: string;
  user: object;
}

interface signInCredentials {
  email: string;
  password: string;
}
interface userData {
  id: string;
  name: string;
  email: string;
  whatsapp: string;
  avatar: string;
  city: string;
  uf: string;
  is_deliveryman: boolean;
}
interface AuthContextData {
  user: userData;
  signIn(credentials: signInCredentials): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@EasyDelivery:token');
    const user = localStorage.getItem('@EasyDelivery:user');

    if (token && user) return { token, user: JSON.parse(user) };

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('sessions', { email, password });

    const { token, user } = response.data;

    localStorage.setItem('@EasyDelivery:token', token);
    localStorage.setItem('@EasyDelivery:user', JSON.stringify(user));

    setData({ token, user });

    api.defaults.headers.Authorization = `Bearer ${token}`;
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@EasyDelivery:token');
    localStorage.removeItem('@EasyDelivery:user');

    setData({} as AuthState);

    api.defaults.headers.Authorization = ``;
  }, []);

  return (
    <AuthContext.Provider
      value={{ user: data.user as userData, signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) throw new Error('useAuth must be used within an AuthProvider');

  return context;
}

export { AuthProvider, useAuth };

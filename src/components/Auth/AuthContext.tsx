import { Context, createContext } from 'react';
import { AuthContextType } from '@models';

export const AuthContext: Context<AuthContextType> = createContext(
  {} as AuthContextType
);

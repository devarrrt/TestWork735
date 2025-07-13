import { AuthState } from '@/types/product';
import { create } from 'zustand';

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isLoading: false,
  login: (user) => {
    localStorage.setItem('token', user.token);
    localStorage.setItem('name', user.name);
    set({ user });
  },
  logout: () => {
    localStorage.removeItem('token');
    localStorage.removeItem('name');
    set({ user: null });
  },
  setLoading: (val) => set({ isLoading: val }),
}));

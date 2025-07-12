import { create } from 'zustand'

interface User {
  name: string
  token: string
}

interface AuthState {
  user: User | null
  login: (user: User) => void
  logout: () => void
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  login: (user) => {
    localStorage.setItem('token', user.token)
    localStorage.setItem('name', user.name)
    set({ user })
  },
  logout: () => {
    localStorage.removeItem('token')
    localStorage.removeItem('name')
    set({ user: null })
  },
}))
export interface Product {
  id: number;
  title: string;
  category: string;
  price: number;
  thumbnail: string;
}
export interface User {
  name: string;
  token: string;
}
export interface AuthState {
  user: User | null;
  isLoading: boolean;
  login: (user: User) => void;
  logout: () => void;
  setLoading: (val: boolean) => void;
}

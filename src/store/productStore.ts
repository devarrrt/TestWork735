import { create } from 'zustand';
import axios from 'axios';

import { Product } from '@/types/product';

type ProductState = {
  products: Product[];
  isLoading: boolean;
  error: string | null;
  fetchProducts: () => Promise<void>;
};

export const useProductStore = create<ProductState>((set) => ({
  products: [],
  isLoading: false,
  error: null,

  fetchProducts: async () => {
    set({ isLoading: true, error: null });
    try {
      const res = await axios.get('https://dummyjson.com/products?limit=12');
      set({ products: res.data.products, isLoading: false });
    } catch (err: any) {
      set({
        isLoading: false,
        error: err?.message || 'Product loading error',
      });
    }
  },
}));

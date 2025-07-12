import { create } from 'zustand'

import api from '@/api/axios'
import { Product } from '@/types/product'

interface ProductState {
  products: Product[]
  fetchProducts: () => Promise<void>
}

export const useProductStore = create<ProductState>((set) => ({
  products: [],
  fetchProducts: async () => {
    const res = await api.get('https://dummyjson.com/products?limit=12')
    set({ products: res.data.products })
  },
}))
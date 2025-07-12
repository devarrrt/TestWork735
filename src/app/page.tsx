'use client'

import { useEffect } from 'react';

import { MenuList } from '@/components'
import { ProductCard } from '@/components/ProductCard'
import { useProductStore } from '@/api/product'
import { useAuthStore } from '@/store/authStore'

export default function HomePage() {
  const setUser = useAuthStore((s) => s.login)
  const { products, fetchProducts } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

    useEffect(() => {
      const token = localStorage.getItem('token')
      const name = localStorage.getItem('name')
      if (token && name) {
        setUser({ name, token })
      }
    }, [setUser])

  return (
    <>
      <MenuList/>
         <div className='container'>
        <h2> Latest Products </h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '1rem' }}>
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
         </div>
    </>
);
}
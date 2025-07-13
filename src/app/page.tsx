'use client';

import { useEffect } from 'react';

import { MenuList } from '@/components';
import { ProductCard } from '@/components/ProductCard';
import { useProductStore } from '@/store/productStore';
import { useAuthStore } from '@/store/authStore';

export default function HomePage() {
  const setUser = useAuthStore((s) => s.login);
  const { products, isLoading, fetchProducts, error } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  // useEffect(() => {
  //   const token = localStorage.getItem('token');
  //   const name = localStorage.getItem('name');
  //   if (token && name) {
  //     setUser({ name, token });
  //   }
  // }, []);

  return (
    <>
      <MenuList />
      <div className="container">
        {isLoading && <span className="loader"></span>}
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {products?.length > 0 && (
          <div className="products">
            <h2> Latest Products </h2>
            <div className="products-list">
              {products.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

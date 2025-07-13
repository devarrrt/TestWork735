import Image from 'next/image';

import { Product } from '@/types/product';
import { useAuthStore } from '@/store/authStore';

import styles from './ProductCard.module.css';
interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const user = useAuthStore((s) => s.user);

  return (
    <div className={styles.card}>
      <Image
        src={product.thumbnail}
        alt={product.title}
        className={styles.image}
        width={300}
        height={400}
      />
      <div className={styles.info}>
        <h3 className={styles.title}>{product.title}</h3>
        <p className={styles.category}> Category: {product.category}</p>
        <span className={styles.price}>${product.price}</span>
        {user && <button className={styles.cardBtn}>Add to cart</button>}
      </div>
    </div>
  );
};

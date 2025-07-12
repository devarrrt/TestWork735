import { Product } from '@/types/product'
import styles from './ProductCard.module.css';
import { useAuthStore } from '@/store/authStore'

interface Props {
  product: Product;
}

export const ProductCard = ({ product }: Props) => {
  const user = useAuthStore((s) => s.user);

  return (
    <div className={styles.card}>
      <img src={product.thumbnail} alt={product.title} className={styles.image} />
      <div className={styles.info}>
        <h3>{product.title}</h3>
        <p>Category: {product.category}</p>
        <p>Price: ${product.price}</p>
        {user && <button>Add to cart</button>}
      </div>
    </div>
  );
};
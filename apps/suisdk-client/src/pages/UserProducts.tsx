import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Product } from '@interverse/suisdk';
import { marketplaceApi } from '../api/marketplaceApi';
import { ProductCard } from '../components/products/ProductCard';
import { Layout } from '../components/layout/Layout';

export const UserProducts: React.FC = () => {
  const { userId } = useParams<{ userId: string }>();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadUserProducts = async () => {
      if (!userId) return;
      try {
        const userProducts = await marketplaceApi.products.getProductsByOwner(userId);
        setProducts(userProducts);
      } catch (err) {
        setError('Failed to load user products');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadUserProducts();
  }, [userId]);

  if (loading) {
    return (
      <Layout>
        <div className="text-center">Loading user products...</div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <div className="text-center text-red-500">{error}</div>
      </Layout>
    );
  }

  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-6">Products owned by {userId}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            showActions={false}
          />
        ))}
      </div>
    </Layout>
  );
};
import React, { useEffect, useState } from 'react';
import { fetchCartItems } from '../api';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getCartItems = async () => {
      try {
        const data = await fetchCartItems();
        setCartItems(data);
      } catch (err) {
        setError('Failed to fetch cart items');
      } finally {
        setLoading(false);
      }
    };

    getCartItems();
  }, []);

  if (loading) return <p>Loading cart items...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Cart</h1>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.product.name} - Quantity: {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;

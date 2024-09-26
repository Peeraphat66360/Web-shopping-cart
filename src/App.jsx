import React, { useState } from 'react';
import ProductList from './components/ProductList';
import ShoppingCart from './components/ShoppingCart';


const products = [
  { id: 1, name: 'สมาร์ทโฟน', price: 15000, image: '=1' },
  { id: 2, name: 'แล็ปท็อป', price: 30000, image: 'https://picsum.photos/200?random=2' },
  { id: 3, name: 'หูฟังไร้สาย', price: 4500, image: 'https://picsum.photos/200?random=3' },
  { id: 4, name: 'สมาร์ทวอทช์', price: 8000, image: 'https://picsum.photos/200?random=4' },
  { id: 5, name: 'แท็บเล็ต', price: 12000, image: 'https://picsum.photos/200?random=5' },
  { id: 6, name: 'กล้องดิจิตอล', price: 20000, image: 'https://picsum.photos/200?random=6' },
  { id: 7, name: 'เครื่องเล่นเกม', price: 15000, image: 'https://picsum.photos/200?random=7' },
  { id: 8, name: 'ลำโพงบลูทูธ', price: 3000, image: 'https://picsum.photos/200?random=8' },
  { id: 9, name: 'พาวเวอร์แบงค์', price: 1500, image: 'https://picsum.photos/200?random=9' },
  { id: 10, name: 'เมาส์ไร้สาย', price: 1000, image: 'https://picsum.photos/200?random=10' },
];

export default function App() {
  const [cartItems, setCartItems] = useState([]);
  const [couponCode, setCouponCode] = useState('');

  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId, quantity) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === productId ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  };

  const applyCoupon = (code) => {
    setCouponCode(code);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">ร้านค้าออนไลน์</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ProductList products={products} addToCart={addToCart} />
          <ShoppingCart
            cartItems={cartItems}
            removeFromCart={removeFromCart}
            updateQuantity={updateQuantity}
            applyCoupon={applyCoupon}
            couponCode={couponCode}
          />
        </div>
      </div>
    </div>
  );
}

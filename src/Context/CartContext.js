// CartContext.js
import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addItem = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const removeItem = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== itemId)
    );
  };

  const updateItem = (itemId, updatedItem) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, ...updatedItem } : item
      )
    );
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addItem, removeItem, updateItem }}
    >
      {children}
    </CartContext.Provider>
  );
};

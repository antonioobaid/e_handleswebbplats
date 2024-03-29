import React, { createContext, useContext, useState } from "react";

export const CartContext = createContext();

  const CartContextProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
  


  const addToCart = (item) => {


    const existingItemIndex = cartItems.findIndex((cartItem) => cartItem._id === item._id);
    

    if (existingItemIndex !== -1) {
        const updatedCartItems = [...cartItems];
        updatedCartItems[existingItemIndex].quantity += 1;
        setCartItems(updatedCartItems);
    } else {
        setCartItems((prevItems) => [...prevItems, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item._id !== productId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const updateQuantity = (productId, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) => item._id === productId ? { ...item, quantity: newQuantity } : item ));
   };

  
  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    clearCart,
    updateQuantity,
  };



  return <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>;
};



export default CartContextProvider;

export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) throw new Error('useCart must be inside a CartContextProvider');

  return context;
};

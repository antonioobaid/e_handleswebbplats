import React from "react";
import { useCart } from "../context/CardContext";
import CartItems from "./CartItems";
import axios from "axios";

const Checkout = () => {
    const { cartItems, removeFromCart, clearCart } = useCart();
  
    const handleRemoveFromCart = (productId) => {
      removeFromCart(productId);
    };
  
   
    const handleClearCart = () => {
        clearCart();
      };

      const handleProceedToCheckout = async () => {
        try {

            if (cartItems.length === 0) {
                console.error("Cannot proceed to checkout. Cart is empty.");
                return;
              }

          const orderRequest = {
            products: cartItems.map((item) => ({
              productId: item._id,
              quantity: item.quantity,
            })),
          };
    
          const response = await axios.post(
            "https://js2-ecommerce-api.vercel.app/api/orders",
            orderRequest
          );
    
          if (response.status === 201) {
            console.log("Order created successfully:", response.data);
            clearCart();
          } else {
            console.error("Failed to create order:", response.data);
          }
        } catch (error) {
          console.error("Error creating order:", error.message);
        }
      };

    return (
        <div className="checkout-page">
          <h2>Your Shopping Cart</h2>
          <div className="cart-items">
            {cartItems.map(item => (
              <CartItems key={item._id} item={item} showQuantityControls={true}
               onRemove={handleRemoveFromCart} />
            ))}
          </div>
          <div className="checkout-options">
            <button onClick={handleClearCart}>Clear Cart</button>
            <button className="Proceed" onClick={handleProceedToCheckout} >Proceed to Checkout</button>
          </div>
        </div>
      );
    };
    
    export default Checkout;
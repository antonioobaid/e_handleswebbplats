import { useCart } from "../context/CardContext";
import CartItems from "./CartItems"
import React from "react";
import { v4 as uuidv4 } from 'uuid';
import { Link } from "react-router-dom";

        
    export const Shoppingcard = () => {
        const { cartItems  } = useCart();

        console.log('Cart Items:', cartItems);

        const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);
            const totalPrice = cartItems.reduce((acc, item) => {
            if (item && item.price && item.quantity) {
             return acc + item.quantity * item.price;
             }
             return acc;
            }, 0);

        return (
        <div className="shoppingcard">
            <div className="visa-product">
            {cartItems.map(item => (
            <CartItems key={`${item._id}-${uuidv4()}`} item={item} />
            ))}
            </div>
            <hr className="line" />
            <div className="visa-resten">
            <div className="pricee">
                <p className="price">Total Quantity: {totalQuantity}</p>
                <p className="price">Total Price: {totalPrice}</p>
                <small className="skatt"> Inkl. vat </small>
            </div>
            <div className="Checkout">
              <Link to="/checkout">
                <button className="checkout-btn">Checkout</button>
              </Link>
            </div>
            </div>
        </div>
        );
    };
  



 
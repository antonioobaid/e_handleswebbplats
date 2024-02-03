import { FaTrash } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { useCart } from "../context/CardContext";


function CartItems({ item }) {

  const { removeFromCart ,updateQuantity } = useCart()

  const handleRemoveFromCart = () => {
    console.log('Removing from cart:', item._id);
    removeFromCart(item._id);
  };

  const handleIncreaseQuantity = () => {
    updateQuantity(item._id, item.quantity + 1);
  };

  const handleDecreaseQuantity = () => {

    if (item.quantity > 1) {
      updateQuantity(item._id, item.quantity - 1);
    }
  };
  

    return (
      <div className="visa-resten">
        <div className="information-av-köpet">
          <img src={item.images[0]} alt="product-image" className="image-item" />
          <div className="item-description" >
            <p className="item-name">{item.name}</p>
            <p className="item-price">{item.quantity} * {item.price}</p>
          </div>
        </div>
        <div className="btn-dalen">
            <div className="plus-minus">
                <button className="plus" onClick={handleIncreaseQuantity}><FaPlus /></button>
                <button className="minus" onClick={handleDecreaseQuantity}><FaMinus /></button>
            </div> 
            <button className="btn-delete" onClick={handleRemoveFromCart} ><FaTrash className="trash" /> </button>
        </div>
      </div>
    );
  }
  
  export default CartItems;
  
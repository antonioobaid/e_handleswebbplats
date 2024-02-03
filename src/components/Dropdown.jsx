import { useState } from "react";
import { Shoppingcard } from "./Shoppingcard";
import { useCart } from "../context/CardContext";



function Dropdown({ children }) {

  const { cartItems } = useCart()
  
  const [isOpen, setIsOpen] = useState(false);
    

  return (
    <>
        {isOpen && <div className="drop-toggle" onClick={() => setIsOpen(false)}/>  }
        <div className="dropdown">
            <div>
                <button onClick={() => setIsOpen(state => !state)} className="dropdown-button">
                    {children}
                </button>
            </div>
            {isOpen && (
                <div className="dropdown-menu">
                    <Shoppingcard   />
                </div>
      )}
        </div>
    </>
  );
}

export default Dropdown;

import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai';
import Cart from '../components/Cart';
import { useStateContext } from '../context/StateContext';

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="">MyHeadphoneStore</Link>
      </p>

      <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
        <AiOutlineShopping />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>

      {showCart && <Cart />}

      {/* Styles */}
      <style jsx>{`
  .cart-icon {
    background-color: transparent;
    border: 1px solid #fff; /* Add a white border */
    border-radius: 50%; /* Make it circular */
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 8px; /* Adjust padding for better spacing */
    transition: background-color 0.3s, border-color 0.3s, box-shadow 0.3s; /* Add transition effects */
  }

  .cart-icon:hover {
    background-color: #fff; /* Change background color on hover */
    border-color: #333; /* Change border color on hover */
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Add a subtle shadow on hover */
  }

  .cart-item-qty {
    margin-left: 5px;
    font-size: 18px;
  }
`}</style>

    </div>
  );
};

export default Navbar;

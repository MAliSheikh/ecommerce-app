import React from "react";
import { useSelector } from "react-redux";
import { getItemsSelector } from "../redux/slices/cartSlice";

const Cart = () => {
    const cartitems = useSelector((state) => state);
    console.log(cartitems);
    const total = cartitems.cart.reduce((a, b) => a + b.price, 0);
    return (
        <div className="alert alert-success">
            <h3 className="text-center"> Total items {cartitems.cart.length} Rs. {total}</h3>
        </div>
    );
};

export default Cart;

import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";

const CartTotal = () => {
    const { currency, delivery_fee, getCartAmount } = useContext(ShopContext);
    
    return (
        <>
            <div className="mb-6 text-2xl">
                <Title text1={"CART "} text2={" TOTALS"} />
            </div>
            
            <div className="flex items-center justify-between py-3 border-b border-navy-200">
                <p className="font-medium text-navy-700">Subtotal</p>
                <p className="font-semibold text-blue-900">{currency}{getCartAmount()}.00</p>
            </div>
            
            <div className="flex items-center justify-between py-3 border-b border-navy-200">
                <p className="font-medium text-navy-700">Shipping Fee</p>
                <p className="font-semibold text-blue-900">{currency}{delivery_fee}.00</p>
            </div>
            
            <div className="flex items-center justify-between py-4 mt-2">
                <p className="text-lg font-bold text-navy-900">Total</p>
                <p className="text-lg font-bold text-blue-900">{currency}{getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee}.00</p>
            </div>
            
        </>
    );
}

export default CartTotal;
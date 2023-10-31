import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { IoMdAdd, IoMdClose, IoMdRemove } from "react-icons/io";
import { CartContext } from "../contexts/CartContext";

const CartItem = ({ item }) => {
 const {removeFromCart, increaseAmount, decreaseAmount} = useContext(CartContext)
  //structure item
  const { _id, title, price, amount, image } = item;

  return (
    <div className="flex gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full font-light text-gray-500">
      <div className="w-full min-h-[150px] flex items-center gap-x-4">
        {/* image */}
        <Link to={`/product/${_id}`}>
          <img className="max-w-[80px]" src={image} alt="" />
        </Link>
        <div className="w-full flex flex-col">
          {/* title and remove icon */}
          <div className="flex justify-between mb-2">
            {/* title */}
            <Link
              to={`/product/${_id}`}
              className="text-sm uppercase font-medium max-w-[240px] text-primary hover:underline"
            >
              {title}
            </Link>

            {/* remove icon */}
            <div onClick={()=> removeFromCart(_id)} className="text-xl cursor-pointer">
              <IoMdClose className="text-gray-500 hover:text-red-500 transition" />
            </div>
          </div>
          <div className="flex gap-x-2 h-[36px] text-sm">
            {/* quantity */}
            <div className="flex flex-1 max-w-[100px] items-center 
            h-full border text-primary font-medium">
              {/* minus icon */}
              <div onClick={() => decreaseAmount(_id)} className="flex-1 flex justify-center items-center cursor-pointer h-full">
                <IoMdRemove />
              </div>
              {/* amount */}
              <div className="h-full flex justify-center 
              items-center px-2">
                {amount}
                </div>
              {/* plus icon */}
              <div onClick={() => increaseAmount(_id)} className="flex-1 h-full flex justify-center items-center cursor-pointer h-full">
                <IoMdAdd />
              </div>
            </div>
              {/* item price */}
            <div className="flex-1 flex items-center justify-around">
              {price} FCFA
              </div>
            {/* final price */}
            {/* make the price at 2 decimals */}
            <div className="flex-1 flex justify-end 
            item-center text-primary font-medium">{`${parseFloat(price * amount).toFixed(2)} FCFA`}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;

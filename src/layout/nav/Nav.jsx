import { ShoppingBag } from "lucide-react";
import "./nav.css";
import { useContext } from "react";
import { CartContext } from "../../pages/Cart/ContextCart";
import { useWindowWidth } from "../../utils/functions";
 

export const Nav = () => {
  const width = useWindowWidth();
  let iconSize = 30
  if (width < 768) {
    iconSize = 38;
  } 

  const { state } = useContext(CartContext);
  const cartLength = state.cart.length;
 
  return (
    <>
      <div className="h-20 border-b-2 flex fixed bg-white z-40 w-full">
        <div className="flex justify-center items-center mx-10">
          <a href="/">
            <span className="font-bold text-3xl">STORE</span>
          </a>
        </div>
        <ul className="hidden md:flex  h-full w-full items-center gap-20">
          <li className="link link-underline link-underline-black">
            <a href="/collections">Collections</a>
          </li>
          <li className="link link-underline link-underline-black">
            <a href="/men">Men</a>
          </li>
          <li className="link link-underline link-underline-black">
            <a href="/women">Women</a>
          </li>
          <li className="link link-underline link-underline-black">
            <a href="/contact">Contact</a>
          </li>
        </ul>
        {cartLength > 0 && (
          <div className="flex justify-center items-center ml-36  md:mx-10">
            <span className="bg-red-500 rounded-full text-white text-xs font-bold px-1 bottom-4 right-5 absolute md:mt-6 md:right-9">
              {cartLength > 9 ? "+9" : cartLength}
            </span>
            <a href="/cart">
              <ShoppingBag size={iconSize}  />
            </a>
          </div>
        )}
     
      </div>
 
    </>
  );
};

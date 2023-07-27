import { useState } from "react";
import { ShoppingBag } from "lucide-react";
import "./nav.css";
import { useContext } from "react";
import { CartContext } from "../../pages/Cart/ContextCart";
import { useWindowWidth } from "../../utils/functions";

export const Nav = () => {
  const width = useWindowWidth();
  let iconSize = 30;
  if (width < 768) {
    iconSize = 38;
  }

  const [isNavOpen, setIsNavOpen] = useState(false);

  const { state } = useContext(CartContext);
  const cartLength = state.cart.length;

  return (
    <>
      <div className=" h-20 border-b-2 flex fixed bg-white z-40 w-full">
        <div className="flex justify-center items-center mx-10">
          <a href="/">
            <span className="font-bold text-3xl">STORE</span>
          </a>
        </div>
        <ul className="hidden md:flex h-full w-full items-center gap-20">
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

        {/* Mobile menu */}
        {width < 768 && (
          <>
            {/* Hamburger menu */}
            <div
              className=" space-y-2 absolute top-7 right-4"
              onClick={() => setIsNavOpen((prev) => !prev)}
            >
              <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
              <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
              <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            </div>

            {/* Mobile menu */}
            <div
              className={`${
                isNavOpen ? "block" : "hidden"
              } absolute inset-x-0 top-full bg-white z-[60] flex flex-col justify-evenly items-center h-96`}
 
            >
              <div
                className="absolute top-full right-full px-full py-full"
                onClick={() => setIsNavOpen(false)}
              >
                <svg
                  className="h-full w-full text-gray-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </div>
              <ul className="flex flex-col items-center justify-between min-h-[250px] ">
                <li className="border-b border-gray-400 my-full uppercase">
                  <a href="/collections">Collections</a>
                </li>
                <li className="border-b border-gray-400 my-full uppercase">
                  <a href="/men">Men</a>
                </li>
                <li className="border-b border-gray-400 my-full uppercase">
                  <a href="/women">Women</a>
                </li>
                <li className="border-b border-gray-400 my-full uppercase">
                  <a href="/contact">Contact</a>
                </li>
              </ul>
            </div>
          </>
        )}

        {cartLength > 0 && (
          <div className="flex justify-center items-center ml-24 md:mr-10">
            <span className="bg-red-500 absolute px-1 rounded-full bottom-3 right-24 md:right-14">
              {cartLength > 9 ? "+9" : cartLength}
            </span>
            <a href="/cart">
              <ShoppingBag size={iconSize} />
            </a>
          </div>
        )}
      </div>
    </>
  );
};

import { useContext, useState } from "react";
import { BtnCart } from "./CartBtn";
import PayPalImg from "./PayPal.png";
import { CartContext } from "./ContextCart";
import { Info } from "lucide-react";
 
import {SoldModal} from './Sold/ModalVenta/Sold'

// Función para calcular los totales
const calculateTotals = (cart) => {
  // Cálculo del subtotal
  const subtotal = cart.reduce((total, item) => {
    const price = item.discount
      ? item.price - item.price * (item.discount / 100)
      : item.price;
    return total + price * item.quantity;
  }, 0);

  // Cálculo de gastos de envío
  const shippingCost = 10;

  // Cálculo de impuestos
  const taxRate = 0.22;
  const taxes = subtotal * taxRate;

  // Cálculo del total
  const total = subtotal + shippingCost + taxes;

  return { subtotal, shippingCost, taxes, total, taxRate };
};

export const CartMenu = () => {
  const { state, dispatch } = useContext(CartContext);
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  // Llamada a la función calculateTotals para obtener los valores de los totales
  const { subtotal, shippingCost, taxes, total, taxRate } = calculateTotals(
    state.cart
  );

  return (
    <>
      <div className="pt-3 w-72  ">
        <div className="h-full w-full p-2">
          <span className="text-2xl">Resumen</span>
          <div className="flex">
            <div className="flex flex-col justify-between gap-2 mt-6 w-4/6">
              <span>Subtotal</span>
              <span>Gastos de envío y gestión estimados</span>
              <div className="flex items-center">
                <span>Impuestos estimados</span>
            </div>
                <div className="ml-2 relative group">
                  <Info
                    className="text-gray-400 hover:text-gray-600 cursor-pointer"
                    size={20}
                  />
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 w-40 p-2 bg-white rounded-md shadow-lg text-xs text-gray-600 z-10 hidden group-hover:block">
                    El impuesto es del {(taxRate * 100).toFixed(0)}% en Uruguay.
                  </div>
                </div>
              </div>
            <div className="flex flex-col w-2/6 mt-6 items-end justify-between">
              <span>${subtotal.toFixed(2)}</span>
              <span>${shippingCost.toFixed(2)}</span>
              <span>${taxes.toFixed(2)}</span>
            </div>
          </div>
          <div className="flex my-10 justify-between border-t border-b py-3 border-opacity-50">
            <div>
              <span>Total</span>
            </div>
            <div>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
          <BtnCart
            color={"bg-black"}
            colorText={"white"}
            pad={"4"}
            modal={handleShowModal}
          >
            Comprar
          </BtnCart>
          {showModal && <SoldModal onClose={handleCloseModal} finalPrice={total} />}
          <BtnCart color={"bg-gray-200"} colorText={"black"} pad={"4"}>
            <img
              className="w-20"
              src={PayPalImg}
              alt="Descripción de la imagen"
            />
          </BtnCart>
        </div>
      </div>
    </>
  );
};

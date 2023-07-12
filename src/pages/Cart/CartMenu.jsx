import { BtnCart } from "./CartBtn";
import PayPalImg from "./PayPal.png";

export const CartMenu = () => {
  return (
    <>
      <div className="pt-3 w-72">
        <div className="h-full w-full p-2">
          <span className="text-2xl">Resumen</span>
          <div className="flex  ">
            <div className="flex flex-col justify-between  gap-2   mt-6 w-4/6">
              <span>Subtotal</span>
              <span>Gastos de envío y gestión estimados</span>
              <span>Impuestos estimados</span>
            </div>
            <div className="flex flex-col w-2/6  mt-6 items-end justify-between  ">
              <span>$388</span>
              <span>$7</span>
              <span>$ 2312312</span>
            </div>
          </div>
          <div className="flex my-10 justify-between border-t border-b py-3 border-opacity-50  ">
            <div className=" ">
              <span>Total</span>
            </div>
            <div className="  ">
              <span>$495</span>
            </div>
          </div>
          <BtnCart color={"black"} colorText={"white"} pad={4}>
            Pagar
          </BtnCart>
          <BtnCart color={"gray-200"} colorText={"black"} pad={4}  >
            <img className=" w-20 " src={PayPalImg} alt="Descripción de la imagen" />
          </BtnCart>
          ;
        </div>
      </div>
    </>
  );
};

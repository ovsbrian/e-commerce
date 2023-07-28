import { XCircle } from "lucide-react";
import { useState } from "react";
import { InstallmentsSelect } from "./InstallmentsSelect";
import { SecurityCodeInput } from "./SecurityCodeInput";
import { CardNumberInput } from "./CardNumberInput";
import { CardholderNameInput } from "./CardholderNameInput";
import { ExpiryDateInput } from "./ExpiryDateInput";
import { EmailInput } from "./EmailInput";
 

 

export const SoldModal = ({ onClose, finalPrice }) => {
  const [cardType, setCardType] = useState(null);

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-[60]">
      <div className="absolute top-0 left-0 w-full h-full bg-gray-500 opacity-50"></div>
      <div className="bg-white my-48 rounded-lg shadow-lg z-10 w-[600px] flex justify-center items-center flex-col">
        <div className="w-full flex justify-end">
          <button onClick={onClose} className=" p-2 hover:text-gray-800">
            <XCircle />
          </button>
        </div>
        <span className="text-3xl my-2 font-semibold">
          Datos de facturación
        </span>

        <form className="flex flex-col w-3/5 gap-2 my-6">
          <CardholderNameInput />
          <CardNumberInput cardType={cardType} setCardType={setCardType} />
          <div className="flex gap-2">
            <div className="flex flex-col w-full">
              <ExpiryDateInput />
            </div>
            <div className="flex flex-col w-full">
              <SecurityCodeInput cardType={cardType} />
            </div>
          </div>
          <EmailInput />
          <div className="flex flex-col justify-between">
            <InstallmentsSelect/>
            <div className="flex justify-between font-semibold">
              <span>Total: </span>
              <span>$ {finalPrice}</span>
            </div>
          </div>
          <div className="flex justify-end rounded p-1">
            <button
              type="submit"
              className="w-20 text-white font-semibold p-1 rounded bg-orange-700 my-4"
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
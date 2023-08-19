import { XCircle } from "lucide-react";
import { useContext, useState } from "react";
import PropTypes from 'prop-types';
import { ProgressBar } from "./progressBar";
import { SoldModa } from "./soldModal";
import { ShippingInfo } from "./shippingInformation.jsx/shippingInformation";
import { Alert } from "./AlertSold";
import { CartContext } from "../../ContextCart";

export const SoldModal = ({ onClose, finalPrice }) => {
  const [step, setStep] = useState(1);
  const [showAlert, setShowAlert] = useState(false);
  const { dispatch } = useContext(CartContext);
  const handleNextClick = (event) => {
    event.preventDefault();

    setStep((prevStep) => prevStep + 1);
  };
  const handleButtonClick = () => {
    setShowAlert(true);
    setTimeout(() => dispatch({ type: "CLEAR_CART" }), 1500);
    setTimeout(() => onClose(), 1500);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-[60]">
      <div className="absolute top-0 left-0 w-full h-full bg-gray-500 opacity-50"></div>
      <div className="bg-white my-48 rounded-lg shadow-lg z-10 w-[600px] flex justify-center items-center flex-col">
        <div className="w-full flex justify-end">
          <button onClick={onClose} className=" p-2 hover:text-gray-800">
            <XCircle />
          </button>
        </div>
        {step === 1 && (
          <>
            <span className="text-3xl my-2 font-semibold">
              Datos de facturación
            </span>
            <ProgressBar step={step} />
            <SoldModa finalPrice={finalPrice} />
            <div className="flex justify-end rounded p-1">
              <button
                onClick={handleNextClick}
                type="submit"
                className="w-20 text-white font-semibold p-1 rounded bg-orange-700 my-4"
              >
                Next
              </button>
            </div>
          </>
        )}
        {step === 2 && (
          <>
            <span className="text-3xl my-2 font-semibold">Datos de envio</span>
            <ProgressBar step={step} />
            <ShippingInfo />
            <div className="flex justify-end rounded p-1">
              <button onClick={handleButtonClick}>Comprar</button>
              {showAlert && (
                <Alert message="¡Gracias por confiar en nosotros!" />
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};
SoldModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  finalPrice: PropTypes.number.isRequired
};
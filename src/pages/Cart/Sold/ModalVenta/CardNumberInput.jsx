import Cleave from "cleave.js";
import { useEffect } from "react";
import { AmericanExpress, MasterCard, Visa } from "./CardsIcons";
 

export const CardNumberInput = ({ cardType, setCardType }) => {
    useEffect(() => {
      const cardNumberInput = document.getElementById("cardNumber");
      new Cleave(cardNumberInput, {
        creditCard: true,
        onCreditCardTypeChanged: (type) => {
          setCardType(type);
        },
      });
    }, []);
  
    return (
      <>
        <label htmlFor="cardNumber">Número de tarjeta:</label>
        <div className="flex h-7">
          <input
            type="text"
            id="cardNumber"
            className="border px-2"
            placeholder="xxxx xxxx xxxx xxxx"
          />
          <div className="w-12 flex items-center  ">
            {cardType === "mastercard" && <MasterCard />}
            {cardType === "amex" && <AmericanExpress />}
            {cardType === "visa" && <Visa />}
          </div>
        </div>
      </>
    );
  };
  
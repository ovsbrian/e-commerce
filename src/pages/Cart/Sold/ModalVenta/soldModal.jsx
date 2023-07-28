import { CardholderNameInput } from "./cardho"
import PropTypes from 'prop-types';

import { CardNumberInput } from "./carcoso";
import { SecurityCodeInput } from "./segurity";
import { InstallmentsSelect } from "./instal";
import { ExpiryDateInput } from "./adasd";
import { EmailInput } from "./email";
import { useState } from "react";

export const SoldModa = ({finalPrice}) => {
    const [cardType, setCardType] = useState(null);
    const [installments, setInstallments] = useState(1);
    const pricePerInstallment = finalPrice / installments;
    return (<>
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
                <InstallmentsSelect setInstallments={setInstallments} />
                <div className="flex justify-between font-semibold">
                  <span>Total: </span>
                  <span>$ {finalPrice}</span>
                </div>
                {installments !== 1 && (
                  <div className="flex justify-between font-semibold">
                    <span>Precio por cuota: </span>
                    {installments !== 0 ? (
                      <span>$ {pricePerInstallment.toFixed(2)}</span>
                    ) : (
                      <span className="text-red-600">
                        Error: El número de cuotas no puede ser 0
                      </span>
                    )}
                  </div>
                )}
              </div>
            </form>
          </>
    )
}

SoldModa.propTypes = {
    finalPrice: PropTypes.number.isRequired
  };
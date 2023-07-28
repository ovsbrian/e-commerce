export const SecurityCodeInput = ({ cardType }) => {
    return (
      <>
        <label htmlFor="securityCode">Código de seguridad:</label>
        <input
          type="text"
          id="securityCode"
          className="h-7  px-2 border w-full  "
          placeholder={cardType === "amex" ? "****" : "***"}
         
        />
      </>
    );
  };
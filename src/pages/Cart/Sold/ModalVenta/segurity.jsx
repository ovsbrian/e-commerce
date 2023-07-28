import PropTypes from 'prop-types';
export const SecurityCodeInput = ({ cardType }) => {
    const hola = cardType === 'amex'? 4 : 3
    return (
      <>
        <label htmlFor="securityCode">Código de seguridad:</label>
        <input
          type="text"
          id="securityCode"
          className="h-7  px-2 border w-full  "
          placeholder={cardType === "amex" ? "****" : "***"}
          maxLength={hola}
        />
      </>
    );
  };
  SecurityCodeInput.propTypes = {
    cardType: PropTypes.string.isRequired
  };